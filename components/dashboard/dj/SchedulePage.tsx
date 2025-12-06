
import React from 'react';
import { CalendarIcon } from '../../IconComponents';

const SchedulePage: React.FC = () => {

    const scheduleData = [
        { day: 'Today', time: '8:00 PM - 10:00 PM', show: 'Night Grooves', station: 'Pulse FM' },
        { day: 'Tomorrow', time: '5:00 PM - 7:00 PM', show: 'The Drive Home', station: 'Pulse FM' },
        { day: 'Friday', time: '10:00 PM - 12:00 AM', show: 'After Hours Mix', station: 'Pulse FM' },
        { day: 'Saturday', time: '12:00 PM - 2:00 PM', show: 'Weekend Brunch', station: 'Pulse FM' },
        { day: 'Next Monday', time: '8:00 PM - 10:00 PM', show: 'Night Grooves', station: 'Pulse FM' },
        { day: 'Next Tuesday', time: '5:00 PM - 7:00 PM', show: 'The Drive Home', station: 'Pulse FM' },
    ];

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">My Schedule</h2>
            </div>

            <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg">
                <div className="p-4 border-b border-gray-700 flex items-center">
                    <CalendarIcon className="h-6 w-6 mr-3 text-primary-400" />
                    <h3 className="text-lg font-semibold text-white">Upcoming Shows</h3>
                </div>
                <div className="divide-y divide-gray-700/50">
                    {scheduleData.map((item, index) => (
                        <div key={index} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-gray-700/40">
                            <div>
                                <p className="font-bold text-lg text-white">{item.show}</p>
                                <p className="text-sm text-gray-400">{item.station}</p>
                            </div>
                            <div className="mt-2 sm:mt-0 text-left sm:text-right">
                                <p className="font-semibold text-primary-400">{item.day}</p>
                                <p className="text-sm text-gray-300">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SchedulePage;
