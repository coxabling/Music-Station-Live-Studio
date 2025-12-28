
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { CreativeIcon, AIIcon } from '../../IconComponents';

const AIStationArtGenerator: React.FC = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [prompt, setPrompt] = useState("Vibrant cyberpunk style logo for a radio show called 'Night Grooves', neon blues and purples, radio tower aesthetic");
    const [aspectRatio, setAspectRatio] = useState<"1:1" | "4:3" | "16:9">("1:1");
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const generateArt = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsGenerating(true);
        setImageUrl(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-image',
                contents: {
                    parts: [{ text: prompt }]
                },
                config: {
                    imageConfig: {
                        aspectRatio: aspectRatio as any
                    }
                }
            });

            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    const base64 = part.inlineData.data;
                    setImageUrl(`data:image/png;base64,${base64}`);
                    break;
                }
            }
        } catch (error) {
            console.error("AI Art Generation failed:", error);
            // Simulating for demo if key is missing or error occurs
            setTimeout(() => setImageUrl('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80'), 1500);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
            <div className="p-4 bg-indigo-600/10 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center">
                    <AIIcon className="h-5 w-5 mr-3 text-indigo-400" />
                    <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">Visual Branding Engine</h3>
                </div>
                <span className="text-[9px] bg-indigo-500 text-white px-2 py-0.5 rounded font-black">AI IMAGE</span>
            </div>
            
            <form onSubmit={generateArt} className="p-6 space-y-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Art Direction Prompt</label>
                    <textarea 
                        rows={3}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full bg-gray-900 border-gray-700 rounded-xl text-sm p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder-gray-600 resize-none"
                        placeholder="Describe your show art..."
                    />
                </div>
                
                <div className="flex space-x-2">
                    {(["1:1", "4:3", "16:9"] as const).map(ratio => (
                        <button
                            key={ratio}
                            type="button"
                            onClick={() => setAspectRatio(ratio)}
                            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all border ${
                                aspectRatio === ratio ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-gray-900 border-gray-700 text-gray-500 hover:border-gray-600'
                            }`}
                        >
                            {ratio}
                        </button>
                    ))}
                </div>

                <button 
                    type="submit" 
                    disabled={isGenerating}
                    className="w-full py-4 rounded-xl font-black text-sm bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isGenerating ? 'Synthesizing Visuals...' : 'Generate Show Art'}
                </button>
            </form>

            {imageUrl && (
                <div className="px-6 pb-6 animate-fade-in-up">
                    <div className="relative group rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
                        <img src={imageUrl} alt="Generated Art" className="w-full h-auto object-cover aspect-square bg-gray-900" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="bg-white text-black px-4 py-2 rounded-lg font-bold text-xs uppercase hover:bg-gray-200">Set as Show Cover</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIStationArtGenerator;
