import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini safely
const apiKey = process.env.API_KEY || '';
let ai: GoogleGenerativeAI | null = null;

if (apiKey) {
  ai = new GoogleGenerativeAI(apiKey);
}

export const generateSampleScript = async (businessName: string, businessType: string): Promise<string> => {
  if (!ai) {
    // Fallback if no API key is present for the demo
    return `Hello! Thanks for calling ${businessName}. This is our AI receptionist. We're currently helping another customer, but if you leave your name and number, we'll get back to you regarding your ${businessType} needs immediately.`;
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(`Write a short, warm, and professional greeting script (max 40 words) for an AI receptionist for a Scottish business named "${businessName}" that specializes in "${businessType}". Use a very subtle, welcoming Scottish tone (e.g., using 'Hello there' or similar friendly phrasing), but keep it professional.`);
    return result.response.text() || "Error generating script.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Could not generate script at this time. Please try again.";
  }
};