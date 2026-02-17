import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY=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
});

app.post("/analyze", async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a medical AI assistant. Provide possible health insights but always advise consulting a professional."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });

  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
