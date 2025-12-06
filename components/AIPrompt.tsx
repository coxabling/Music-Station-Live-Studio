
import React, { useState } from 'react';

const AIPrompt: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const promptText = `TASK: Create a set of radio imaging assets (jingle, station ID sweepers, two liners, and an intro/outro bed) in English for a radio station named "Pulse FM". Deliver high-quality broadcast-ready WAV files (44.1kHz/16bit) and MP3 previews. Provide a short 10-word metadata description for each file.

CONTEXT:
- Station brand: "Pulse FM" — energetic, urban electronic/pop, target 18–34 listeners.
- Tone & personality: lively, charismatic, slightly edgy, confident.
- Logo tagline (to voice): "Pulse FM — Feel the Beat."
- Use modern electronica production: driving synth bass, crisp percussive hats, warm pads, short vocal chop motif.
- Loudness and finalised mix: broadcast standard (-14 LUFS integrated preferred; please include both WAV and mp3).
- Tempo references: 100–110 BPM for jingles; 120 BPM sweepers optional.
- Languages: primary English (US accent neutral). Provide one alternative short sweeper in simple UK English phrasing.

REQUIREMENTS (deliverables):
1) 15-second Jingle (full musical bed with sung "Pulse FM — Feel the Beat" hook).
2) Three 5–8 second sweepers (spoken/stylized voice): "Pulse FM — Feel the Beat" (different energy: high, mid, low).
3) Two liners (3–6 seconds) for show intros: e.g. "You're live on Pulse FM with [HOST NAME]".
4) 10-second outro bed for transitions.
5) Metadata for each file: filename, description (<=10 words), suggested usage (jingle, sweep, outro).
6) Provide stems for the 15s jingle: lead vocal, drums, bass, synths, FX.
7) Include a short revision plan: up to 2 rounds of minor edits.

VOICE GUIDELINES:
- Main voice: a single neutral US English voice with warmth; compressed but clear.
- Provide an alternate voice in UK English (female or male) for one sweeper.
- No copyrighted vocal impersonations or celebrity voices.

OUTPUT FORMATTING:
- Name files like: pulsefm_jingle_15s.wav, pulsefm_sweeper_high_5s.wav, etc.
- Include a simple JSON manifest listing files and metadata.

NOTES:
- Ensure files are free of samples that require third-party licensing, or clearly declare sample usage.
- Keep the vocal hook short & memorable; avoid long sentences.
- Produce versions mixed/mastered to -14 LUFS integrated.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="ai-prompt" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Harness the Power of Generative AI</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Use this prompt in Google AI Studio or your favorite audio model to generate professional radio imaging in minutes.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
            <div className="flex justify-between items-center p-4 bg-gray-700/50 border-b border-gray-600">
              <span className="text-sm font-semibold text-gray-300">Example AI Studio Prompt: Radio Imaging</span>
              <button
                onClick={handleCopy}
                className="flex items-center text-sm font-medium bg-gray-600 text-gray-200 px-3 py-1 rounded-md hover:bg-gray-500 transition-colors"
              >
                {isCopied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="p-6 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono">
              <code>{promptText}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPrompt;
