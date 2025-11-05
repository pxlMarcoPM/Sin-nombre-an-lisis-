
import { GoogleGenAI, Type } from "@google/genai";
import type { SeoAnalysisResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateSeoAnalysis(topic: string): Promise<SeoAnalysisResult> {
  const model = "gemini-2.5-flash";

  const prompt = `
    Actúa como un experto en SEO y estratega de contenido especializado en análisis cinematográfico.
    Para el siguiente tema, genera una lista de palabras clave SEO relevantes y un esquema detallado para un artículo de blog.

    Tema: "${topic}"

    La respuesta debe ser un objeto JSON con dos claves: "keywords" y "outline".
    - "keywords": Un array de 10 a 15 strings, incluyendo palabras clave de cola larga y corta.
    - "outline": Un string formateado con markdown que presente una estructura clara para un artículo (Introducción, secciones de desarrollo con subtítulos, Conclusión).
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            keywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Lista de palabras clave SEO relevantes para el tema.'
            },
            outline: {
              type: Type.STRING,
              description: 'Esquema del artículo en formato markdown.'
            }
          },
          required: ['keywords', 'outline'],
        }
      }
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
        throw new Error("API returned an empty response.");
    }
    
    // Sometimes the model might return markdown ```json ... ``` wrapper
    const cleanedJsonText = jsonText.replace(/^```json\s*|```$/g, '');

    const result = JSON.parse(cleanedJsonText) as SeoAnalysisResult;
    return result;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate SEO analysis. Please check the topic or try again later.");
  }
}
