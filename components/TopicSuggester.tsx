
import React, { useState } from 'react';
import { generateSeoAnalysis } from '../services/geminiService';
import type { SeoAnalysisResult } from '../types';
import SparklesIcon from './icons/SparklesIcon';
import LoaderIcon from './icons/LoaderIcon';

const TopicSuggester: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SeoAnalysisResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const analysisResult = await generateSeoAnalysis(topic);
      setResult(analysisResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="sugerir" className="scroll-mt-20 py-12 bg-gray-800/50 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Potencia tu Contenido con IA</h2>
        <p className="text-lg text-gray-400">¿Tienes un tema? Obtén palabras clave y un esquema de artículo al instante.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ej: 'Análisis de la cinematografía en Blade Runner 2049'"
            className="w-full px-5 py-3 text-lg bg-gray-700 border-2 border-gray-600 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-white transition-all duration-300"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !topic.trim()}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:ring-offset-gray-900 disabled:bg-pink-800 disabled:cursor-not-allowed transition-all duration-300 neon-shadow-pink disabled:shadow-none whitespace-nowrap"
          >
            {isLoading ? (
              <>
                <LoaderIcon />
                Analizando...
              </>
            ) : (
              <>
                <SparklesIcon />
                Analizar Tema
              </>
            )}
          </button>
        </div>
      </form>

      <div className="max-w-4xl mx-auto mt-10 px-4">
        {error && (
          <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-md fade-in" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {result && (
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 fade-in">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-pink-400 mb-4">Palabras Clave SEO</h3>
              <div className="flex flex-wrap gap-3">
                {result.keywords.map((keyword, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm font-medium">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-sky-400 mb-4">Esquema del Artículo</h3>
              <div className="prose prose-invert prose-lg max-w-none text-gray-300 whitespace-pre-wrap">
                {result.outline}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopicSuggester;
