import { z } from "zod";
import { contactFormSchema } from "../schemas/contactForm";

// スキーマから型を推論
export type ContactFormData = z.infer<typeof contactFormSchema>;
