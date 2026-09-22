import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  service: z.string().max(100).optional(),
  message: z.string().min(10).max(2000),
  // honeypot field, must stay empty — bots fill it, humans never see it
  website: z.string().max(0).optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
