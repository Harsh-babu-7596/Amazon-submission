// backend/src/services/aiService.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GENAI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function optimizeListing({ asin, title, bullets, description }) {
  const prompt = `
Respond ONLY in JSON.

{
  "optimizedTitle": "...",
  "optimizedBullets": ["...", "..."],
  "optimizedDescription": "...",
  "keywords": ["...", "..."]
}

ASIN: ${asin}
Title: ${title}
Bullets: ${bullets.join(" | ")}
Description: ${description}
`;

  try {
    const result = await model.generateContent(prompt);
    const output = result.response.text();

    console.log("=============== RAW AI RESPONSE ================");
    console.log(output);
    console.log("================================================");

    // Extract JSON
    const jsonMatch = output.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Invalid JSON output");

    return JSON.parse(jsonMatch[0]);

  } catch (err) {
    console.error("====== GEMINI ERROR ======");
    console.error(err.toString());
    console.error("==========================");
    throw new Error("Gemini call failed");
  }
}

module.exports = { optimizeListing };
