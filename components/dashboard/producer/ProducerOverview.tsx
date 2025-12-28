
import React, { useState } from 'react';
import StatCard from '../StatCard';
import DataTable from '../DataTable';
import { StreamingIcon, AnalyticsIcon, AdminIcon, CalendarIcon, AIIcon, PlayIcon } from '../../IconComponents';
import AIImagingGenerator from './AIImagingGenerator';
import { GoogleGenAI } from "@google/genai";

const ProducerOverview: React.FC = () => {
    const [isPlanning, setIsPlanning] = useState(false);
    const [showNotes, setShowNotes] = useState<string | null>(null);

    const generateShowPlan = async () => {
        setIsPlanning(true);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: "Create a 3-segment outline for a 'Morning Rush' radio show on Pulse FM (Electronic/Pop). Include topic ideas, track placement suggestions, and a teaser script for each segment.",
            });
            setShowNotes(response.text);
        } catch (error) {
            setShowNotes("Segment 1: Local Events\nSegment 2: New Music Premiere\nSegment 3: Entertainment News Wrap-up");
        } finally {
            setIsPlanning(false);
        }
    };

    const mediaData = [
        { id: 1, title: 'Morning Jingle', type: 'Jingle', duration: '0:15', date: '2023-10-26' },
        { id: 2, 'title': 'Artist Interview - Funky Beats', type: 'Interview', duration: '12:30', date: '2023-10-25' },
        { id: 3, 'title': 'Top 5 Hits', type: 'Sweeper', duration: '0:05', date: '2023-10-25' },
        { id: 4, 'title': 'Local Auto Ad', type: 'Advert', duration: '0:30', date: '2023-10-24' },
    ];

  return (
    <div className="space-y-8">
        <div>
            <h2 className="text-3xl font-extrabold text-white">Producer Dashboard</h2>
            <p className="text-gray-400 mt-1">Managing <span className="text-primary-400 font-bold">Pulse FM</span> • Broadcast Studio A</p>
        </div>
        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard title="Real-time Listeners" value="8,432" change="+420" changeType="increase" icon={StreamingIcon} />
            <StatCard title="Peak (Last 24h)" value="10,981" icon={AnalyticsIcon} />
            <StatCard title="Storage" value="15.7 / 20 GB" icon={AdminIcon} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
                 {/* AI Show Planner */}
                 <div className="bg-gray-800/40 rounded-xl border border-gray-700/50 p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <AIIcon className="h-48 w-48 text-primary-400" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white flex items-center">
                                <AIIcon className="h-5 w-5 mr-2 text-primary-400" />
                                AI Show Planner
                            </h3>
                            <button 
                                onClick={generateShowPlan}
                                disabled={isPlanning}
                                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-all shadow-lg"
                            >
                                {isPlanning ? 'Analyzing...' : 'Generate New Outline'}
                            </button>
                        </div>
                        {showNotes ? (
                            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 text-sm text-gray-300 whitespace-pre-line max-h-60 overflow-y-auto custom-scrollbar">
                                {showNotes}
                            </div>
                        ) : (
                            <div className="text-center py-8 border-2 border-dashed border-gray-700 rounded-lg">
                                <p className="text-gray-500 italic">No plan generated for the upcoming show yet.</p>
                            </div>
                        )}
                    </div>
                 </div>

                 <DataTable
                    title="Recent Media Assets"
                    columns={[
                        { key: 'title', header: 'Title' },
                        { key: 'type', header: 'Type' },
                        { key: 'duration', header: 'Dur' },
                        { key: 'actions' as any, header: '' },
                    ]}
                    data={mediaData}
                    renderRow={(item) => (
                        <>
                            <td className="px-6 py-4 font-medium text-white">{item.title}</td>
                            <td className="px-6 py-4">
                                <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-gray-700 rounded text-gray-300">{item.type}</span>
                            </td>
                            <td className="px-6 py-4 text-gray-500">{item.duration}</td>
                            <td className="px-6 py-4 text-right">
                                <button className="p-2 hover:text-primary-400 transition-colors"><PlayIcon className="h-4 w-4"/></button>
                            </td>
                        </>
                    )}
                />
            </div>

            <div className="lg:col-span-4 h-full">
                <AIImagingGenerator />
            </div>
        </div>
    </div>
  );
};

export default ProducerOverview;
