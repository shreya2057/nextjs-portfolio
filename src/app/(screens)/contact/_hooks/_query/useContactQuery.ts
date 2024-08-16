import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { z } from "zod";
import { CONTACT_API_ENDPOINTS } from "../../_api";
import { contactFormSchema } from "../../_schema/contactFormSchema";

export const sendMessage = async (data: z.infer<typeof contactFormSchema>) => {
  try {
    const response = await fetch(CONTACT_API_ENDPOINTS.contact, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      return response.json();
    } else {
      throw response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const useContactQuery = () => {
  return useMutation({
    mutationKey: ["send-message"],
    mutationFn: sendMessage,
    onSuccess: (response) => {
      toast.success(response.message);
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
};
