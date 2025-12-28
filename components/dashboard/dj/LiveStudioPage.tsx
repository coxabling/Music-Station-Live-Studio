
import React, { useState, useEffect, useRef } from 'react';
import { CalendarIcon, MicrophoneIcon, PlayIcon, StopIcon, StreamingIcon } from '../../IconComponents';
import DataTable from '../DataTable';

interface RequestItem {
    id: number;
    track: string;
    user: string;
    status: 'Pending' | 'Played' | 'Rejected';
}

const AudioVisualizer: React.FC<{ active: boolean }> = ({ active }) => {
    return (
        <div className="flex items-end justify-center space-x-1 h-32 w-full max-w-md mx-auto">
            {Array.from({ length: 24 }).map((_, i) => (
                <div
                    key={i}
                    className={`w-2 bg-primary-500 rounded-full transition-all duration-75 ${
                        active ? 'animate-pulse' : 'h-1 opacity-20'
                    }`}
                    style={{
                        height: active ? `${Math.random() * 80 + 10}%` : '4px',
                        animationDelay: `${i * 0.05}s`,
                        transitionDuration: '100ms'
                    }}
                ></div>
            ))}
        </div>
    );
};

const LiveStudioPage: React.FC = () => {
    const [isOnAir, setIsOnAir] = useState(false);
    const [streamTime, setStreamTime] = useState(0);
    const [listeners, setListeners] = useState(0);
    const timerRef = useRef<number | null>(null);
    const listenerRef = useRef<number | null>(null);
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

    const handleBroadcastToggle = () => {
        setIsOnAir(prev => !prev);
    };

    useEffect(() => {
        if (isOnAir) {
            setListeners(Math.floor(Math.random() * 200) + 50);
            timerRef.current = window.setInterval(() => {
                setStreamTime(prev => prev + 1);
            }, 1000);
            listenerRef.current = window.setInterval(() => {
                setListeners(prev => Math.max(0, prev + Math.floor(Math.random() * 11) - 5));
            }, 3000);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
            if (listenerRef.current) clearInterval(listenerRef.current);
            setStreamTime(0);
            setListeners(0);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (listenerRef.current) clearInterval(listenerRef.current);
        };
    }, [isOnAir]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-extrabold text-white">Live Broadcast</h2>
                    <p className="text-gray-400 mt-1">Session: <span className="font-bold text-gray-200">The Night Shift</span></p>
                </div>
                {isOnAir && (
                    <div className="flex items-center space-x-2 bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-full animate-pulse">
                        <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                        <span className="text-red-500 text-xs font-black uppercase tracking-tighter">Live On Air</span>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                 <div className="lg:col-span-8 space-y-6">
                     <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 shadow-2xl p-8 overflow-hidden relative">
                        {/* Background visualizer accent */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 to-transparent pointer-events-none"></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                            <AudioVisualizer active={isOnAir} />
                            
                            <div className="space-y-2">
                                <h3 className="text-4xl font-black text-white tracking-tight">
                                    {isOnAir ? 'BROADCASTING LIVE' : 'STATION STANDBY'}
                                </h3>
                                <p className="text-gray-400 max-w-md mx-auto">
                                    {isOnAir 
                                        ? "Your signal is being routed through the Global CDN. Audience engagement is currently peaking in North America." 
                                        : "Ready to go live. Check your input levels and mic placement before hitting the switch."}
                                </p>
                            </div>

                            <button 
                                onClick={handleBroadcastToggle}
                                className={`group relative w-full max-w-xs h-16 rounded-2xl font-black text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl flex items-center justify-center space-x-3 ${
                                    isOnAir 
                                    ? 'bg-red-600 text-white hover:bg-red-700' 
                                    : 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400'
                                }`}
                            >
                                {isOnAir ? (
                                   <>
                                    <StopIcon className="h-6 w-6" />
                                    <span>KILL THE MIC</span>
                                   </>
                                ) : (
                                   <>
                                    <MicrophoneIcon className="h-6 w-6 group-hover:animate-bounce" />
                                    <span>START SHOW</span>
                                   </>
                                )}
                            </button>

                            <div className="grid grid-cols-2 gap-6 w-full max-w-lg pt-4 border-t border-gray-700/50">
                                <div>
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Active Listeners</p>
                                    <p className="text-2xl font-bold text-primary-400">{listeners.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Uptime</p>
                                    <p className="text-2xl font-bold text-white">{formatTime(streamTime)}</p>
                                </div>
                            </div>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50">
                             <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-bold text-gray-300 uppercase">Now Playing</h4>
                                <StreamingIcon className="h-4 w-4 text-primary-400 animate-pulse" />
                             </div>
                             <p className="text-lg font-bold text-white truncate">{isOnAir ? 'Starlight - MUSE' : 'Commercial Break'}</p>
                             <div className="mt-4 w-full bg-gray-700 rounded-full h-1">
                                <div className="bg-primary-500 h-1 rounded-full w-1/3 transition-all"></div>
                             </div>
                        </div>
                         <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50">
                             <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-bold text-gray-300 uppercase">Input Monitor</h4>
                                <div className="flex space-x-1">
                                    <div className="h-3 w-1 bg-green-500"></div>
                                    <div className="h-3 w-1 bg-green-500"></div>
                                    <div className="h-3 w-1 bg-green-500"></div>
                                    <div className="h-3 w-1 bg-yellow-500"></div>
                                    <div className="h-3 w-1 bg-red-500 opacity-20"></div>
                                </div>
                             </div>
                             <p className="text-lg font-bold text-white">XLR 1: SM7B</p>
                             <p className="text-xs text-green-400 mt-1">-12dB (Clean)</p>
                        </div>
                     </div>
                 </div>

                 <div className="lg:col-span-4 space-y-6">
                     <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden">
                        <div className="p-4 border-b border-gray-700 bg-gray-900/40 flex items-center justify-between">
                            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Listener Hub</h3>
                            <span className="text-[10px] bg-primary-600 px-2 py-0.5 rounded text-white font-bold">LIVE CHAT</span>
                        </div>
                        <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
                            {requestData.map(item => (
                                <div key={item.id} className="p-3 bg-gray-900/40 rounded-xl border border-gray-700/30 group hover:border-primary-500/50 transition-colors">
                                    <p className="text-xs font-black text-primary-400">{item.user}</p>
                                    <p className="text-sm text-white font-medium mt-1">"Can you play {item.track}?"</p>
                                    <div className="flex items-center mt-3 space-x-2">
                                        <button className="flex-1 text-[10px] font-bold bg-primary-600/20 text-primary-400 py-1 rounded hover:bg-primary-600 hover:text-white transition-all">ACCEPT</button>
                                        <button className="text-[10px] font-bold text-gray-500 hover:text-red-400 py-1 px-2 transition-all">IGNORE</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>

                     <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-6">
                         <h3 className="text-sm font-bold text-white uppercase mb-4 tracking-widest">Station Log</h3>
                         <div className="space-y-3">
                            <div className="flex items-start space-x-3 text-xs">
                                <span className="text-gray-500 font-mono">20:15</span>
                                <span className="text-gray-300">Live Show "Night Grooves" started.</span>
                            </div>
                            <div className="flex items-start space-x-3 text-xs">
                                <span className="text-gray-500 font-mono">20:12</span>
                                <span className="text-gray-300">Auto-DJ Transition complete.</span>
                            </div>
                             <div className="flex items-start space-x-3 text-xs">
                                <span className="text-gray-500 font-mono">20:10</span>
                                <span className="text-gray-300">Imaging: PulseFM_Sweeper_01 played.</span>
                            </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default LiveStudioPage;
