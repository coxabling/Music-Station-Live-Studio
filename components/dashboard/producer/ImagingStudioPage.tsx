
import React from 'react';
import DataTable from '../DataTable';
import AIImagingGenerator from './AIImagingGenerator';
import AIStationArtGenerator from './AIStationArtGenerator';

interface ImagingAsset {
    id: number;
    title: string;
    type: string;
    date: string;
    createdBy: string;
}

const ImagingStudioPage: React.FC = () => {

    const generatedImaging: ImagingAsset[] = [
        { id: 1, title: 'pulsefm_jingle_energetic_15s.wav', type: 'Jingle', date: '2023-10-27', createdBy: 'AI Generator' },
        { id: 2, title: 'drive_home_sweeper_v2.mp3', type: 'Sweeper', date: '2023-10-26', createdBy: 'John Smith' },
        { id: 3, title: 'news_intro_final.wav', type: 'Intro', date: '2023-10-25', createdBy: 'John Smith' },
        { id: 4, title: 'weekend_brunch_promo.mp3', type: 'Promo', date: '2023-10-24', createdBy: 'AI Generator' },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-white tracking-tight uppercase">Imaging & Creative Studio</h2>
                <div className="flex space-x-2">
                    <span className="text-[10px] font-black bg-indigo-600 px-3 py-1 rounded-full text-white uppercase tracking-widest">Brand Engine v2.0</span>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-8">
                     <DataTable<ImagingAsset>
                        title="Asset Library"
                        columns={[
                            { key: 'title', header: 'File Name' },
                            { key: 'type', header: 'Type' },
                            { key: 'date', header: 'Created' },
                            { key: 'createdBy', header: 'Author' },
                            { key: 'id', header: 'Actions' },
                        ]}
                        data={generatedImaging}
                        renderRow={(item) => (
                            <>
                                <td className="px-6 py-4 font-bold text-white text-xs">{item.title}</td>
                                <td className="px-6 py-4">
                                    <span className="text-[9px] font-black bg-gray-700 text-gray-300 px-2 py-0.5 rounded uppercase tracking-tighter">{item.type}</span>
                                </td>
                                <td className="px-6 py-4 text-xs text-gray-500">{item.date}</td>
                                <td className="px-6 py-4 text-xs text-gray-300 font-medium">{item.createdBy}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-[10px] font-black text-primary-400 hover:text-white uppercase">Preview</button>
                                </td>
                            </>
                        )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50">
                            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Voice Talent Pool</h4>
                            <div className="space-y-3">
                                {['Zephyr', 'Puck', 'Kore'].map(voice => (
                                    <div key={voice} className="flex items-center justify-between p-2 bg-gray-900/40 rounded-lg">
                                        <span className="text-xs font-bold text-white">{voice} (US Neutral)</span>
                                        <span className="text-[9px] text-green-400 font-black uppercase">Online</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50">
                            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Creative Credits</h4>
                            <div className="flex items-baseline space-x-1">
                                <span className="text-3xl font-black text-white">42</span>
                                <span className="text-xs text-gray-500 font-bold">REMAINING</span>
                            </div>
                            <p className="text-[10px] text-gray-500 mt-2">Next refill: Oct 30, 2023</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 space-y-8">
                    <AIStationArtGenerator />
                    <AIImagingGenerator />
                </div>
            </div>
        </div>
    );
};

export default ImagingStudioPage;
