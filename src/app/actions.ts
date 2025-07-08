"use server";

import { selectRelevantTestimonial } from "@/ai/flows/select-relevant-testimonial";

const allTestimonials = [
  "Aveda Technologies's SaaS product revolutionized our workflow. It's intuitive, powerful, and has significantly boosted our productivity.",
  "The custom software solution they developed for us was a game-changer. It perfectly fit our unique business needs and the team was a pleasure to work with.",
  "Thanks to Aveda Technologies's digital marketing strategies, our online presence has skyrocketed. We've seen a massive increase in leads and conversions.",
  "We were looking for a scalable SaaS platform and Aveda Technologies delivered beyond our expectations. Their support is top-notch too.",
  "The custom development process was smooth and transparent. Aveda Technologies's engineers are true experts who delivered a high-quality product on time and on budget.",
  "Our social media engagement and website traffic have grown exponentially since partnering with Aveda Technologies for digital marketing. Highly recommended!",
];

export async function getRelevantTestimonial(service: string) {
  if (!service) {
    return { success: false, error: "Please select a service." };
  }
  
  try {
    const result = await selectRelevantTestimonial({
      serviceOfInterest: service,
      testimonials: allTestimonials,
    });
    return { success: true, testimonial: result.relevantTestimonial };
  } catch (error) {
    console.error("AI Testimonial Selection Error:", error);
    return { success: false, error: "Failed to get a testimonial. Please try again." };
  }
}
