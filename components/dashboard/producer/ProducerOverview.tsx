
import React from 'react';
import StatCard from '../StatCard';
import DataTable from '../DataTable';
import { StreamingIcon, AnalyticsIcon, AdminIcon, CalendarIcon } from '../../IconComponents';
import AIImagingGenerator from './AIImagingGenerator';

const ProducerOverview: React.FC = () => {

    const mediaData = [
        { id: 1, title: 'Morning Jingle', type: 'Jingle', duration: '0:15', date: '2023-10-26' },
        { id: 2, 'title': 'Artist Interview - Funky Beats', type: 'Interview', duration: '12:30', date: '2023-10-25' },
        { id: 3, 'title': 'Top 5 Hits', type: 'Sweeper', duration: '0:05', date: '2023-10-25' },
        { id: 4, 'title': 'Local Auto Ad', type: 'Advert', duration: '0:30', date: '2023-10-24' },
        { id: 5, 'title': 'Pulse FM News Intro', type: 'Intro', duration: '0:10', date: '2023-10-24' },
        { id: 6, 'title': 'Concert Promo - The Gloomes', type: 'Promo', duration: '0:25', date: '2023-10-23' },
    ];

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const calendarDate = (day: number) => (new Date(2023, 9, 23 + day)).getDate(); // Mock starting on Oct 23
    const scheduleEvents: {[key:number]: {title: string, color: string}[]} = {
        0: [{title: 'Morning Rush', color: 'primary'}],
        1: [{title: 'Morning Rush', color: 'primary'}, {title: 'Midday Mix', color: 'indigo'}],
        2: [{title: 'Morning Rush', color: 'primary'}, {title: 'The Drive Home', color: 'teal'}],
        3: [{title: 'Morning Rush', color: 'primary'}, {title: 'The Drive Home', color: 'teal'}],
        4: [{title: 'Morning Rush', color: 'primary'}, {title: 'After Hours', color: 'purple'}],
        5: [{title: 'Weekend Brunch', color: 'pink'}],
        6: [{title: 'Sunday Smooth Jazz', color: 'yellow'}],
    };


  return (
    <>
        <h2 className="text-2xl font-bold text-white mb-6">Producer Dashboard: Pulse FM</h2>
        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard title="Current Listeners" value="8,432" icon={StreamingIcon} />
            <StatCard title="Peak Listeners (24h)" value="10,981" icon={AnalyticsIcon} />
            <StatCard title="Storage Used" value="15.7 / 20 GB" icon={AdminIcon} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
                 <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg">
                    <div className="p-4 border-b border-gray-700 flex items-center">
                        <CalendarIcon className="h-6 w-6 mr-3 text-primary-400" />
                        <h3 className="text-lg font-semibold text-white">This Week's Schedule</h3>
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-2">
                            {days.map(day => <div key={day}>{day}</div>)}
                        </div>
                         <div className="grid grid-cols-7 gap-1 text-sm">
                            {[...Array(7)].map((_, i) => (
                                <div key={i} className="p-1 h-28 rounded bg-gray-700/40 overflow-y-auto">
                                    <span className={ i === 3 ? 'font-bold text-primary-400' : ''}>{calendarDate(i)}</span>
                                    <div className="space-y-1 mt-1">
                                    {scheduleEvents[i]?.map(event => (
                                        <div key={event.title} className={`text-xs p-1 bg-${event.color}-900/70 border-l-2 border-${event.color}-500 rounded-r text-white truncate`}>{event.title}</div>
                                    ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-1">
                <AIImagingGenerator />
            </div>
        </div>

        <DataTable
            title="Recent Media"
            columns={[
                { key: 'title', header: 'Title' },
                { key: 'type', header: 'Type' },
                { key: 'duration', header: 'Duration' },
                { key: 'date', header: 'Date Added' },
                { key: 'actions' as any, header: 'Actions' },
            ]}
            data={mediaData}
            renderRow={(item) => (
                <>
                    <td className="px-6 py-4 font-medium text-white">{item.title}</td>
                    <td className="px-6 py-4">{item.type}</td>
                    <td className="px-6 py-4">{item.duration}</td>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4 text-right">
                        <button className="font-medium text-primary-400 hover:text-primary-300">Manage</button>
                    </td>
                </>
            )}
        />
    </>
  );
};

export default ProducerOverview;
