const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({ apiKey: "AIzaSyADTtcNQf2cKiNlMrqQgJGemsEXZPDn9U0" });

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents:msg,
  });
  return response.text;
}

module.exports= main;