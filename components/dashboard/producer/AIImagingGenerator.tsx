
import React, { useState } from 'react';
import { CreativeIcon, PlayIcon } from '../../IconComponents';

const AIImagingGenerator: React.FC = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedFile, setGeneratedFile] = useState<string | null>(null);

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsGenerating(true);
        setGeneratedFile(null);
        setTimeout(() => {
            setGeneratedFile('pulsefm_jingle_energetic_15s.wav');
            setIsGenerating(false);
        }, 2500);
    };

    return (
        <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg h-full flex flex-col">
            <div className="p-4 border-b border-gray-700 flex items-center flex-shrink-0">
                <CreativeIcon className="h-6 w-6 mr-3 text-primary-400" />
                <h3 className="text-lg font-semibold text-white">AI Imaging Generator</h3>
            </div>
            <form onSubmit={handleGenerate} className="p-4 flex-grow flex flex-col">
                <div className="space-y-3 flex-grow">
                    <div>
                        <label htmlFor="station" className="text-xs font-medium text-gray-400">Station Name</label>
                        <input type="text" id="station" defaultValue="Pulse FM" className="w-full mt-1 bg-gray-700/50 border-gray-600 rounded-md shadow-sm text-sm p-2 text-white focus:ring-primary-500 focus:border-primary-500" />
                    </div>
                    <div>
                        <label htmlFor="type" className="text-xs font-medium text-gray-400">Type</label>
                        <select id="type" className="w-full mt-1 bg-gray-700/50 border-gray-600 rounded-md shadow-sm text-sm p-2 text-white focus:ring-primary-500 focus:border-primary-500">
                            <option>Jingle</option>
                            <option>Sweeper</option>
                            <option>Promo</option>
                            <option>Stinger</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="prompt" className="text-xs font-medium text-gray-400">Prompt / Brief</label>
                        <textarea id="prompt" rows={3} className="w-full mt-1 bg-gray-700/50 border-gray-600 rounded-md shadow-sm text-sm p-2 text-white focus:ring-primary-500 focus:border-primary-500" defaultValue="Energetic, upbeat, for morning show intro"></textarea>
                    </div>
                </div>
                <div className="mt-4 flex-shrink-0">
                    <button type="submit" disabled={isGenerating} className="w-full bg-primary-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center">
                        {isGenerating ? (
                           <>
                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                             </svg>
                             Generating...
                           </>
                        ) : 'Generate Imaging'}
                    </button>
                </div>
            </form>
            {generatedFile && (
                 <div className="border-t border-gray-700/50 p-4 bg-gray-900/30">
                     <h4 className="text-sm font-semibold text-white">Generated File:</h4>
                     <div className="mt-2 p-2 bg-gray-700 rounded-md flex items-center justify-between">
                        <span className="text-sm text-gray-300 truncate">{generatedFile}</span>
                        <button className="text-primary-400 hover:text-primary-300">
                           <PlayIcon className="h-5 w-5"/>
                        </button>
                     </div>
                 </div>
            )}
        </div>
    );
};

export default AIImagingGenerator;
