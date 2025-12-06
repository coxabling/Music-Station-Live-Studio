
import React, { useState } from 'react';
import DataTable from '../DataTable';
import Modal from '../Modal';
import { PlusIcon, SearchIcon, FilterIcon, UploadIcon } from '../../IconComponents';

interface MediaItem {
    id: number;
    title: string;
    type: string;
    duration: string;
    date: string;
    uploadedBy: string;
}

const MediaLibraryPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const mediaData: MediaItem[] = [
        { id: 1, title: 'Morning Jingle', type: 'Jingle', duration: '0:15', date: '2023-10-26', uploadedBy: 'John Smith' },
        { id: 2, title: 'Artist Interview - Funky Beats', type: 'Interview', duration: '12:30', date: '2023-10-25', uploadedBy: 'Alex Ray' },
        { id: 3, title: 'Top 5 Hits', type: 'Sweeper', duration: '0:05', date: '2023-10-25', uploadedBy: 'John Smith' },
        { id: 4, title: 'Local Auto Ad', type: 'Advert', duration: '0:30', date: '2023-10-24', uploadedBy: 'Jane Doe' },
        { id: 5, title: 'Pulse FM News Intro', type: 'Intro', duration: '0:10', date: '2023-10-24', uploadedBy: 'John Smith' },
        { id: 6, title: 'Concert Promo - The Gloomes', type: 'Promo', duration: '0:25', date: '2023-10-23', uploadedBy: 'John Smith' },
        { id: 7, title: 'The Drive Home Sweeper', type: 'Sweeper', duration: '0:03', date: '2023-10-23', uploadedBy: 'AI Generator' },
        { id: 8, title: 'Weekly Recap Segment', type: 'Show Segment', duration: '5:45', date: '2023-10-22', uploadedBy: 'Alex Ray' },
        { id: 9, title: 'After Hours Show Intro', type: 'Intro', duration: '0:20', date: '2023-10-21', uploadedBy: 'DJ Nightshade' },
        { id: 10, title: 'PSA - Community Food Drive', type: 'PSA', duration: '0:45', date: '2023-10-20', uploadedBy: 'Jane Doe' },
    ];

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-white">Media Library</h2>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative w-full sm:w-auto">
                        <input type="text" placeholder="Search media..." className="bg-gray-700/50 border-gray-600 rounded-md shadow-sm text-sm p-2 pl-8 text-white focus:ring-primary-500 focus:border-primary-500 w-full" />
                        <SearchIcon className="h-4 w-4 text-gray-400 absolute top-1/2 left-2.5 transform -translate-y-1/2" />
                    </div>
                     <button className="flex items-center bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600 transition-colors">
                        <FilterIcon className="h-5 w-5 mr-1" />
                        Filter
                    </button>
                    <button onClick={() => setIsModalOpen(true)} className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
                        <PlusIcon className="h-5 w-5 mr-1" />
                        Upload
                    </button>
                </div>
            </div>

            <DataTable
                title="All Media"
                columns={[
                    { key: 'title', header: 'Title' },
                    { key: 'type', header: 'Type' },
                    { key: 'duration', header: 'Duration' },
                    { key: 'date', header: 'Date Added' },
                    { key: 'uploadedBy', header: 'Uploaded By' },
                    { key: 'actions' as any, header: 'Actions' },
                ]}
                data={mediaData}
                renderRow={(item) => (
                    <>
                        <td className="px-6 py-4 font-medium text-white">{item.title}</td>
                        <td className="px-6 py-4">{item.type}</td>
                        <td className="px-6 py-4">{item.duration}</td>
                        <td className="px-6 py-4">{item.date}</td>
                        <td className="px-6 py-4">{item.uploadedBy}</td>
                        <td className="px-6 py-4 text-right space-x-2">
                             <button className="font-medium text-primary-400 hover:text-primary-300">Edit</button>
                             <button className="font-medium text-red-400 hover:text-red-300">Delete</button>
                        </td>
                    </>
                )}
            />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Upload New Media">
                 <div className="mt-4">
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-400">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-800 rounded-md font-medium text-primary-400 hover:text-primary-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 focus-within:ring-primary-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">MP3, WAV, AAC up to 256MB</p>
                        </div>
                    </div>
                     <div className="mt-8 pt-5 border-t border-gray-700">
                        <div className="flex justify-end">
                            <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500">
                                Cancel
                            </button>
                            <button type="button" onClick={() => setIsModalOpen(false)} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500">
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default MediaLibraryPage;
