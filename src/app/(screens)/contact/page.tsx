"use client";
import { GreyButton } from "@/nextjs-portfolio/components/Buttons/GreyButton";
import FormControl from "@/nextjs-portfolio/components/Form/FormControl";
import { TbMessageCode } from "react-icons/tb";
import { useContactForm } from "./_hooks/_form/useContactForm";

export default function Contact() {
  const { contactFormMethods, onSubmit, isLoading } = useContactForm();
  return (
    <div className="flex bg-gray-900 w-full text-gray-200 items-center py-10 px-10 md:px-20">
      <div className="flex  flex-col w-full flex-[60%] xl:flex-[50%] bg-gray-900 py-10 md:px-20 rounded-md gap-4">
        <div className="text-2xl font-extrabold text-amber-600">Contacts</div>
        <form className="flex flex-col gap-6">
          <FormControl
            inputControl="input"
            control={contactFormMethods.control}
            name="full_name"
            label="Full name"
          />
          <FormControl
            inputControl="input"
            control={contactFormMethods.control}
            name="email"
            label="Email"
          />
          <FormControl
            inputControl="input"
            control={contactFormMethods.control}
            name="company_name"
            label="Company's Name"
          />
          <FormControl
            inputControl="input"
            control={contactFormMethods.control}
            name="company_address"
            label="Company's Address"
          />
          <FormControl
            inputControl="textarea"
            control={contactFormMethods.control}
            name="message"
            label="Message"
          />
          <div className="self-center">
            {isLoading ? (
              <div className="bg-gray-700 px-4 py-2 text-sm font-bold text-white rounded-lg cursor-not-allowed  ">
                Loading...
              </div>
            ) : (
              <GreyButton
                text="Send Message"
                onClickFunction={contactFormMethods.handleSubmit(onSubmit)}
              />
            )}
          </div>
        </form>
      </div>

      <div className="flex-[20%] xl:flex-[50%] hidden lg:flex items-center justify-end">
        <TbMessageCode className="text-lime-600 text-[300px] xl:text-[400px]" />
      </div>
    </div>
  );
}
