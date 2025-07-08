'use server';
/**
 * @fileOverview A simple chatbot flow for Aveda Technologies.
 *
 * - askChatbot - A function that gets a response from the AI assistant.
 * - ChatbotInput - The input type for the askChatbot function.
 * - ChatbotOutput - The return type for the askChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotInputSchema = z.string();
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.string();
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

export async function askChatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  const { response } = await chatbotFlow({query: input});
  return response;
}

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: z.object({ query: z.string() })},
  output: {schema: z.object({ response: z.string() })},
  prompt: `You are a friendly and helpful AI assistant for Aveda Technologies.
  Your goal is to answer questions about the company and its services.

  Here are the services offered by Aveda Technologies:
  - SaaS Products: Ready-to-deploy, customizable SaaS solutions.
  - Custom Software Development: Bespoke software, web apps, mobile apps, and APIs.
  - Digital Marketing: SEO, content strategy, social media, and PPC campaigns.
  - UI/UX Design: Intuitive and beautiful user interface and experience design.
  - Logo & Branding Design: Creating memorable brand identities.
  - Technology & AI Consulting: AI integration, technology roadmapping, and solution architecture.

  Answer the user's query based on this information. Keep your answers concise and helpful. If you don't know the answer or the question is unrelated to Aveda Technologies, politely state that you cannot help with that request.

  User Query: {{{query}}}
  `,
});

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: z.object({ query: z.string() }),
    outputSchema: z.object({ response: z.string() }),
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
