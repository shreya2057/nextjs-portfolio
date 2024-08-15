import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "../../_schema/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

export const useContactForm = () => {
  const formMethods = useForm<z.infer<typeof contactFormSchema>>({
    defaultValues: {
      full_name: "",
      email: "",
      company_name: "",
      company_address: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
  };

  return { contactFormMethods: formMethods, onSubmit };
};
