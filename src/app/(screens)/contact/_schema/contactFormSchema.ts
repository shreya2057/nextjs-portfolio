import * as z from "zod";

export const contactFormSchema = z.object({
  full_name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid Email" }),
  company_name: z.string().min(1, { message: "Company name is required" }),
  company_address: z
    .string()
    .min(1, { message: "Company address is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});
