export interface GeminiAIContentPart {
  text: string;
}

interface GeminiAIContent {
  parts: GeminiAIContentPart[];
}

export interface GeminiAIRequest {
  contents: GeminiAIContent[];
  safetySettings: { threshold: string; category: string }[];
  generationConfig: {
    topK: number;
    stopSequences: string[];
    temperature: number;
    maxOutputTokens: number;
    topP: number;
  };
}

export interface GeminiAIResponse {
  candidates: {
    finishReason: string;
    index: number;
    safetyRatings: { probability: string; category: string }[];
    content: { role: string; parts: GeminiAIContentPart[] };
  }[];
  usageMetadata: {
    candidatesTokenCount: number;
    totalTokenCount: number;
    promptTokenCount: number;
  };
}

export interface GeminiAIPayload {
  goal: string;
  current_level: string;
  preferred_learning_style: string;
  resources_available: string;
  time_commitment: string;
  language: string;
  field_of_study: string;
  learning_pace: string;
  preferred_tools_and_platforms: string;
}