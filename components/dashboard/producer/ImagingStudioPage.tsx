
import React from 'react';
import DataTable from '../DataTable';
import AIImagingGenerator from './AIImagingGenerator';

const ImagingStudioPage: React.FC = () => {

    const generatedImaging = [
        { id: 1, title: 'pulsefm_jingle_energetic_15s.wav', type: 'Jingle', date: '2023-10-27', createdBy: 'AI Generator' },
        { id: 2, title: 'drive_home_sweeper_v2.mp3', type: 'Sweeper', date: '2023-10-26', createdBy: 'John Smith' },
        { id: 3, title: 'news_intro_final.wav', type: 'Intro', date: '2023-10-25', createdBy: 'John Smith' },
        { id: 4, title: 'weekend_brunch_promo.mp3', type: 'Promo', date: '2023-10-24', createdBy: 'AI Generator' },
        { id: 5, title: 'top_of_hour_stinger.wav', type: 'Stinger', date: '2023-10-23', createdBy: 'John Smith' },
        { id: 6, title: 'pulsefm_tagline_feel_the_beat.mp3', type: 'Liner', date: '2023-10-22', createdBy: 'AI Generator' },
    ];

    return (
        <>
            <h2 className="text-2xl font-bold text-white mb-6">Imaging Studio</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                     <DataTable
                        title="Generated Imaging Library"
                        columns={[
                            { key: 'title', header: 'File Name' },
                            { key: 'type', header: 'Type' },
                            { key: 'date', header: 'Date Created' },
                            { key: 'createdBy', header: 'Created By' },
                            { key: 'actions' as any, header: 'Actions' },
                        ]}
                        data={generatedImaging}
                        renderRow={(item) => (
                            <>
                                <td className="px-6 py-4 font-medium text-white">{item.title}</td>
                                <td className="px-6 py-4">{item.type}</td>
                                <td className="px-6 py-4">{item.date}</td>
                                <td className="px-6 py-4">{item.createdBy}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button className="font-medium text-primary-400 hover:text-primary-300">Preview</button>
                                    <button className="font-medium text-red-400 hover:text-red-300">Delete</button>
                                </td>
                            </>
                        )}
                    />
                </div>
                <div className="lg:col-span-1">
                    <AIImagingGenerator />
                </div>
            </div>
        </>
    );
};

export default ImagingStudioPage;
