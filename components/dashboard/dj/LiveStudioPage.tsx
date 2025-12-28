
import React, { useState, useEffect, useRef } from 'react';
import { CalendarIcon, MicrophoneIcon, PlayIcon, StopIcon } from '../../IconComponents';
import DataTable from '../DataTable';

// Added RequestItem interface for type safety
interface RequestItem {
    id: number;
    track: string;
    user: string;
    status: 'Pending' | 'Played' | 'Rejected';
}

const LiveStudioPage: React.FC = () => {
    const [isOnAir, setIsOnAir] = useState(false);
    const [streamTime, setStreamTime] = useState(0);
    const [listeners, setListeners] = useState(0);
    const timerRef = useRef<number | null>(null);
    const listenerRef = useRef<number | null>(null);
    // Properly typed requestData state using the new interface
    const [requestData, setRequestData] = useState<RequestItem[]>([
        { id: 1, track: 'Blinding Lights - The Weeknd', user: 'Listener23', status: 'Pending' },
        { id: 2, track: 'Levitating - Dua Lipa', user: 'MusicFan88', status: 'Pending' },
        { id: 3, track: 'Good 4 U - Olivia Rodrigo', user: 'RadioHead1', status: 'Played' },
        { id: 4, track: 'Stay - The Kid LAROI', user: 'JustinBfan', status: 'Pending' },
        { id: 5, track: 'Shivers - Ed Sheeran', user: 'PopLover', status: 'Rejected' },
        { id: 6, track: 'Heat Waves - Glass Animals', user: 'IndieHead', status: 'Pending' },
    ]);

    const scheduleData = [
        { id: 1, time: 'Tonight, 8:00 PM - 10:00 PM', show: 'Night Grooves', status: 'On Now' },
        { id: 2, time: 'Tomorrow, 5:00 PM', show: 'The Drive Home', status: 'Upcoming' },
        { id: 3, time: 'Friday, 10:00 PM', show: 'After Hours Mix', status: 'Upcoming' },
    ];
    
    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const handleBroadcastToggle = () => {
        setIsOnAir(prev => !prev);
    };

    const handleRequestAction = (id: number, newStatus: 'Played' | 'Rejected') => {
        setRequestData(prevData => prevData.map(req => 
            req.id === id ? { ...req, status: newStatus } : req
        ));
    };

    useEffect(() => {
        if (isOnAir) {
            setListeners(Math.floor(Math.random() * 200) + 50); // Initial listeners
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
        <>
            <h2 className="text-2xl font-bold text-white mb-6">Live Studio</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2 space-y-8">
                     <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg">
                        <div className="p-4 border-b border-gray-700 flex items-center">
                            <MicrophoneIcon className="h-6 w-6 mr-3 text-primary-400" />
                            <h3 className="text-lg font-semibold text-white">Broadcast Controls</h3>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col sm:flex-row items-center justify-between">
                                <div>
                                    <h4 className="text-xl font-bold text-white">Night Grooves</h4>
                                    <p className="text-gray-400">You are currently{' '}
                                        <span className={`font-semibold ${isOnAir ? 'text-green-400' : 'text-red-400'}`}>
                                            {isOnAir ? 'ON AIR' : 'OFF AIR'}
                                        </span>
                                    </p>
                                </div>
                                <button 
                                    onClick={handleBroadcastToggle}
                                    className={`mt-4 sm:mt-0 w-full sm:w-auto font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                                        isOnAir ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
                                    } text-white`}
                                >
                                    {isOnAir ? (
                                    <>
                                        <StopIcon className="h-5 w-5" />
                                        <span>Stop Broadcasting</span>
                                    </>
                                    ) : (
                                    <>
                                        <PlayIcon className="h-5 w-5" />
                                        <span>Start Broadcasting</span>
                                    </>
                                    )}
                                </button>
                            </div>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                                <div className="bg-gray-700/50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Current Listeners</p>
                                    <p className="text-2xl font-bold text-white">{listeners.toLocaleString()}</p>
                                </div>
                                <div className="bg-gray-700/50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Stream Time</p>
                                    <p className="text-2xl font-bold text-white">{formatTime(streamTime)}</p>
                                </div>
                            </div>
                             <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gray-700/50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Now Playing</p>
                                    <p className="font-semibold text-white truncate">{isOnAir ? 'Starlight - MUSE' : 'Silence'}</p>
                                </div>
                                <div className="bg-gray-700/50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Up Next</p>
                                    <p className="font-semibold text-white truncate">{isOnAir ? 'Listener Request: Blinding Lights' : 'Queue Empty'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className="lg:col-span-1 space-y-8">
                     {/* Explicitly provide RequestItem generic type to DataTable to resolve renderRow access errors */}
                     <DataTable<RequestItem>
                        title="Listener Requests"
                        columns={[
                            { key: 'track', header: 'Track' },
                            { key: 'user', header: 'Requested By' },
                            { key: 'status' as any, header: 'Status' },
                            { key: 'actions' as any, header: 'Actions' },
                        ]}
                        data={requestData}
                        renderRow={(item) => (
                            <>
                                <td className="px-6 py-4 font-medium text-white">{item.track}</td>
                                <td className="px-6 py-4">{item.user}</td>
                                <td className="px-6 py-4">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : item.status === 'Played' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <button onClick={() => handleRequestAction(item.id, 'Played')} disabled={item.status !== 'Pending'} className="font-medium text-green-400 hover:text-green-300 disabled:text-gray-500 disabled:cursor-not-allowed">Play</button>
                                    <button onClick={() => handleRequestAction(item.id, 'Rejected')} disabled={item.status !== 'Pending'} className="font-medium text-red-400 hover:text-red-300 disabled:text-gray-500 disabled:cursor-not-allowed">Reject</button>
                                </td>
                            </>
                        )}
                    />
                     <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg">
                        <div className="p-4 border-b border-gray-700 flex items-center">
                            <CalendarIcon className="h-6 w-6 mr-3 text-primary-400" />
                            <h3 className="text-lg font-semibold text-white">Upcoming Schedule</h3>
                        </div>
                        <div className="p-4">
                            <ul className="space-y-3">
                                {scheduleData.map(item => (
                                    <li key={item.id} className="p-3 bg-gray-700/50 rounded-lg">
                                        <p className="font-semibold text-white">{item.show}</p>
                                        <p className="text-sm text-gray-400">{item.time}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                 </div>
            </div>
        </>
    );
};

export default LiveStudioPage;
