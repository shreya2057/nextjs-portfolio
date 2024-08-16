import * as z from "zod";

export const contactFormSchema = z.object({
  full_name: z
    .string()
    .min(1, { message: "Name is required" })
    .regex(new RegExp(/^(?=.*\s)[A-Za-z\s]+$/), { message: "Invalid Name" }),
  email: z.string().email({ message: "Invalid Email" }),
  company_name: z
    .string()
    .min(1, { message: "Company name is required" })
    .regex(new RegExp(/^(?=.*\s)[A-Za-z\s]+$/), {
      message: "Invalid Company's Name",
    }),
  company_address: z
    .string()
    .min(1, { message: "Company address is required" })
    .regex(new RegExp(/^[a-zA-Z0-9-,]+$/), "Invalid Company's Address"),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .regex(new RegExp(/^[a-zA-Z0-9,.? ]+$/), "Forbidden characters"),
});
