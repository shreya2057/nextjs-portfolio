import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "../../_schema/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useContactQuery } from "../_query/useContactQuery";

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

  const { mutateAsync: sendMessage, isLoading } = useContactQuery();

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    await sendMessage(data);
    formMethods.reset();
  };

  return { contactFormMethods: formMethods, onSubmit, isLoading };
};
