
import React, { useState, useEffect, useRef } from 'react';
import { CalendarIcon, MicrophoneIcon, PlayIcon, StopIcon, StreamingIcon } from '../../IconComponents';

interface RequestItem {
    id: number;
    track: string;
    user: string;
    status: 'Pending' | 'Played' | 'Rejected';
}

const VisualizerCanvas: React.FC<{ active: boolean }> = ({ active }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const dataArrayRef = useRef<Uint8Array | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        if (active && canvasRef.current) {
            const startMic = async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
                    const analyser = audioContext.createAnalyser();
                    const source = audioContext.createMediaStreamSource(stream);
                    
                    source.connect(analyser);
                    analyser.fftSize = 64;
                    const bufferLength = analyser.frequencyBinCount;
                    const dataArray = new Uint8Array(bufferLength);
                    
                    audioCtxRef.current = audioContext;
                    analyserRef.current = analyser;
                    dataArrayRef.current = dataArray;

                    const draw = () => {
                        if (!canvasRef.current || !analyserRef.current || !dataArrayRef.current) return;
                        const ctx = canvasRef.current.getContext('2d');
                        if (!ctx) return;

                        const width = canvasRef.current.width;
                        const height = canvasRef.current.height;
                        analyserRef.current.getByteFrequencyData(dataArrayRef.current);

                        ctx.clearRect(0, 0, width, height);
                        const barWidth = (width / bufferLength) * 2.5;
                        let barHeight;
                        let x = 0;

                        for (let i = 0; i < bufferLength; i++) {
                            barHeight = (dataArrayRef.current[i] / 255) * height;
                            
                            const gradient = ctx.createLinearGradient(0, height, 0, 0);
                            gradient.addColorStop(0, '#2563eb');
                            gradient.addColorStop(1, '#60a5fa');
                            
                            ctx.fillStyle = gradient;
                            ctx.fillRect(x, height - barHeight, barWidth - 2, barHeight);
                            x += barWidth;
                        }
                        animationRef.current = requestAnimationFrame(draw);
                    };
                    draw();
                } catch (err) {
                    console.error("Mic access denied", err);
                }
            };
            startMic();
        } else {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            if (audioCtxRef.current) audioCtxRef.current.close();
        }

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            if (audioCtxRef.current) audioCtxRef.current.close();
        };
    }, [active]);

    return (
        <div className="w-full max-w-md h-32 bg-gray-900/50 rounded-xl border border-gray-700/50 overflow-hidden flex items-center justify-center">
            {active ? (
                <canvas ref={canvasRef} className="w-full h-full" width={400} height={128} />
            ) : (
                <div className="flex space-x-1 opacity-20">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="w-2 h-4 bg-gray-500 rounded-full"></div>
                    ))}
                </div>
            )}
        </div>
    );
};

const LiveStudioPage: React.FC = () => {
    const [isOnAir, setIsOnAir] = useState(false);
    const [streamTime, setStreamTime] = useState(0);
    const [listeners, setListeners] = useState(0);
    const [requestData, setRequestData] = useState<RequestItem[]>([
        { id: 1, track: 'Blinding Lights - The Weeknd', user: 'Listener23', status: 'Pending' },
        { id: 2, track: 'Levitating - Dua Lipa', user: 'MusicFan88', status: 'Pending' },
        { id: 3, track: 'Good 4 U - Olivia Rodrigo', user: 'RadioHead1', status: 'Played' },
    ]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    useEffect(() => {
        let timer: number, listenerUpdate: number;
        if (isOnAir) {
            setListeners(Math.floor(Math.random() * 200) + 50);
            timer = window.setInterval(() => setStreamTime(prev => prev + 1), 1000);
            listenerUpdate = window.setInterval(() => setListeners(prev => Math.max(0, prev + Math.floor(Math.random() * 11) - 5)), 3000);
        } else {
            setStreamTime(0);
            setListeners(0);
        }
        return () => {
            clearInterval(timer);
            clearInterval(listenerUpdate);
        };
    }, [isOnAir]);

    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-4xl font-black text-white tracking-tight uppercase">Live Studio</h2>
                    <p className="text-gray-400">Current Session: <span className="font-bold text-primary-400">The Night Shift</span></p>
                </div>
                {isOnAir && (
                    <div className="flex items-center space-x-2 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-full animate-pulse">
                        <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>
                        <span className="text-red-500 text-xs font-black uppercase tracking-widest">On Air</span>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                 <div className="lg:col-span-8 space-y-6">
                     <div className="bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl p-10 overflow-hidden relative">
                        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                            <VisualizerCanvas active={isOnAir} />
                            
                            <div className="space-y-2">
                                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                                    {isOnAir ? 'Signal Transmitting' : 'System Standby'}
                                </h3>
                                <p className="text-gray-500 text-sm max-w-sm mx-auto uppercase font-bold tracking-widest">
                                    {isOnAir ? 'Routing via Tokyo Edge CDN' : 'Check Mic Gain & Mixer Levels'}
                                </p>
                            </div>

                            <button 
                                onClick={() => setIsOnAir(!isOnAir)}
                                className={`w-full max-w-xs h-20 rounded-2xl font-black text-xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center space-x-4 ${
                                    isOnAir 
                                    ? 'bg-red-600 text-white hover:bg-red-700' 
                                    : 'bg-primary-600 text-white hover:bg-primary-500 shadow-primary-500/20'
                                }`}
                            >
                                {isOnAir ? (
                                   <>
                                    <StopIcon className="h-8 w-8" />
                                    <span>STOP BROADCAST</span>
                                   </>
                                ) : (
                                   <>
                                    <MicrophoneIcon className="h-8 w-8" />
                                    <span>GO LIVE NOW</span>
                                   </>
                                )}
                            </button>

                            <div className="grid grid-cols-2 gap-12 w-full max-w-md pt-8 border-t border-gray-700/50">
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Listener Peak</p>
                                    <p className="text-3xl font-black text-white">{listeners.toLocaleString()}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Session Timer</p>
                                    <p className="text-3xl font-black text-primary-400">{formatTime(streamTime)}</p>
                                </div>
                            </div>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50">
                             <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Playback Status</h4>
                             <p className="text-lg font-bold text-white truncate">{isOnAir ? 'Starlight — MUSE' : 'Commercial Break: Pulse Promo'}</p>
                             <div className="mt-4 w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                <div className="bg-primary-500 h-full w-[45%] transition-all duration-1000"></div>
                             </div>
                        </div>
                         <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50">
                             <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Hardware Link</h4>
                             <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 bg-primary-950 rounded-lg flex items-center justify-center border border-primary-500/20 text-primary-400">
                                    <MicrophoneIcon className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-white text-sm">SM7B Cloudlifter</p>
                                    <p className="text-[10px] text-green-400 font-bold uppercase">-14 LUFS Clean</p>
                                </div>
                             </div>
                        </div>
                     </div>
                 </div>

                 <div className="lg:col-span-4 space-y-6">
                     <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden flex flex-col h-[500px]">
                        <div className="p-4 border-b border-gray-700 bg-gray-900/40 flex items-center justify-between">
                            <h3 className="text-[10px] font-black text-white uppercase tracking-widest">Global Listener Hub</h3>
                            <span className="text-[10px] bg-primary-600 px-2 py-0.5 rounded-full text-white font-bold tracking-tighter">14 NEW</span>
                        </div>
                        <div className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar">
                            {requestData.map(item => (
                                <div key={item.id} className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/30 group hover:border-primary-500/50 transition-all cursor-pointer">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-[10px] font-black text-primary-400 uppercase tracking-wider">{item.user}</p>
                                        <span className="text-[10px] text-gray-500">2m ago</span>
                                    </div>
                                    <p className="text-sm text-gray-200 font-medium italic">"Hey! Can we hear {item.track} next?"</p>
                                    <div className="flex items-center mt-4 space-x-2">
                                        <button className="flex-1 text-[10px] font-black bg-primary-600/10 text-primary-400 py-2 rounded-lg hover:bg-primary-600 hover:text-white transition-all">APPROVE</button>
                                        <button className="text-[10px] font-black text-gray-600 hover:text-red-400 px-3">X</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default LiveStudioPage;
