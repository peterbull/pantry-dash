import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '',
  baseURL: 'http://192.168.0.1:1234/v1'
});

async function runMain() {
  const chatCompletion = await openai.chat.completions.create({
    model: "local-model",
    messages: [
      { role: 'user', content: 'Say this is a test' }
    ],
    stream: false
  });

  console.log(chatCompletion.choices);
}


runMain();