
import React from 'react';

const SchedulePage: React.FC = () => {
    
    const hours = Array.from({ length: 18 }, (_, i) => `${i + 6}:00`); // 6am to 11pm
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    const events = [
        // Monday
        { day: 0, start: 0, end: 4, title: 'Morning Rush', host: 'Jenna Parks', color: 'bg-primary-900/70 border-primary-500' },
        { day: 0, start: 7, end: 10, title: 'Midday Mix', host: 'AutoDJ', color: 'bg-indigo-900/70 border-indigo-500' },
        { day: 0, start: 10, end: 14, title: 'The Drive Home', host: 'Alex Ray', color: 'bg-teal-900/70 border-teal-500' },
        // Tuesday
        { day: 1, start: 0, end: 4, title: 'Morning Rush', host: 'Jenna Parks', color: 'bg-primary-900/70 border-primary-500' },
        { day: 1, start: 14, end: 17, title: 'Indie Wave', host: 'Emily White', color: 'bg-pink-900/70 border-pink-500' },
        // Wednesday
        { day: 2, start: 0, end: 4, title: 'Morning Rush', host: 'Jenna Parks', color: 'bg-primary-900/70 border-primary-500' },
        { day: 2, start: 10, end: 14, title: 'The Drive Home', host: 'Alex Ray', color: 'bg-teal-900/70 border-teal-500' },
        // Thursday
        { day: 3, start: 0, end: 4, title: 'Morning Rush', host: 'Jenna Parks', color: 'bg-primary-900/70 border-primary-500' },
        { day: 3, start: 14, end: 16, title: 'The Rock Block', host: 'Maria Garcia', color: 'bg-red-900/70 border-red-500' },
        // Friday
        { day: 4, start: 0, end: 4, title: 'Morning Rush', host: 'Jenna Parks', color: 'bg-primary-900/70 border-primary-500' },
        { day: 4, start: 16, end: 18, title: 'After Hours', host: 'DJ Nightshade', color: 'bg-purple-900/70 border-purple-500' },
        // Saturday
        { day: 5, start: 4, end: 8, title: 'Weekend Brunch', host: 'AutoDJ', color: 'bg-yellow-900/70 border-yellow-500' },
        // Sunday
        { day: 6, start: 12, end: 15, title: 'Sunday Smooth Jazz', host: 'AutoDJ', color: 'bg-green-900/70 border-green-500' },
    ];

    return (
        <>
            <h2 className="text-2xl font-bold text-white mb-6">Full Station Schedule</h2>
            <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg overflow-hidden">
                <div className="grid grid-cols-[auto_repeat(7,1fr)]">
                    {/* Time Column */}
                    <div className="row-span-1 col-span-1"></div>
                    {/* Day Headers */}
                    {days.map(day => (
                        <div key={day} className="text-center font-semibold text-white p-2 border-b border-l border-gray-700">{day}</div>
                    ))}

                    {/* Schedule Grid */}
                    <div className="col-start-1 col-end-2 row-start-2 row-end-[20] grid grid-rows-18">
                        {hours.map(hour => (
                            <div key={hour} className="text-right text-xs text-gray-400 pr-2 border-r border-t border-gray-700 h-16 flex items-center justify-end">{hour}</div>
                        ))}
                    </div>

                    <div className="col-start-2 col-end-9 row-start-2 row-end-[20] grid grid-cols-7 grid-rows-18 relative">
                        {/* Grid lines */}
                        {Array.from({length: 18 * 7}).map((_, i) => (
                             <div key={i} className="border-t border-l border-gray-700 h-16"></div>
                        ))}
                        {/* Events */}
                        {events.map((event, i) => (
                            <div key={i} 
                                className={`absolute w-full p-2 rounded ${event.color} border-l-4 text-white overflow-hidden`}
                                style={{
                                    gridColumnStart: event.day + 1,
                                    gridRowStart: event.start + 1,
                                    gridRowEnd: event.end + 1,
                                    top: `${event.start * 4}rem`, // 4rem = h-16
                                    height: `${(event.end - event.start) * 4}rem`,
                                    left: `calc(${(100 / 7) * event.day}%)`,
                                    width: `calc(${(100 / 7)}%)`,
                                }}
                            >
                                <p className="font-bold text-sm truncate">{event.title}</p>
                                <p className="text-xs text-gray-300 truncate">{event.host}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SchedulePage;
