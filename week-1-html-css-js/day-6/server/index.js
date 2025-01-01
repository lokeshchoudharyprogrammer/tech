const OpenAI = require('openai');
const { GoogleGenerativeAI } =require('@google/generative-ai')
const cors = require('cors');
const express = require('express');
require('dotenv').config()

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
console.log(process.env.XAI_API)

const aiContentGenerator = async (UserPrompt) => {
    const openai = new OpenAI({
        apiKey: process.env.XAI_API,
        baseURL: "https://api.x.ai/v1",
    });

    try {
        const completion = await openai.chat.completions.create({
            model: "grok-2-latest",
            messages: [
                {
                    role: "system",
                    content: "You are Grok, a chatbot. I will give you a todo, and you must expand it into a meaningful sentence in 10 words or less. Provide three unique suggestions for each input.",
                },
                {
                    role: "user",
                    content: UserPrompt, // Replace with the actual user prompt variable or string.
                },
            ],
        });
        return completion.choices[0].message.content;
    } catch (error) {
        console.error("Error generating AI content:", error.message);
        throw new Error("Failed to generate AI content");
    }
};

app.post('/todo', async (req, res) => {
   
    const UserPrompt=req.body.prompt
    try {
        const aiContent = await aiContentGenerator(UserPrompt);
        res.send({ aiContent });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port} http://localhost:${port}`);
});
