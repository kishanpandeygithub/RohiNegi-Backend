const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({  });

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents:msg,
  });
  return response.text;
}

module.exports= main;
