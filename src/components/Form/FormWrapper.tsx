import { FieldError } from "react-hook-form";

type FormWrapperProps = {
  errors?: FieldError;
  children: React.ReactNode;
  label?: string;
};
function FormWrapper({ errors, label, children }: FormWrapperProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <div className="text-sm  text-gray-400 font-semibold">{label}</div>
      )}
      <div
        className={`flex w-full ${
          errors ? "border-red-400" : "border-gray-400"
        } rounded-md`}
      >
        {children}
      </div>
      {errors && <div className="text-red-400 text-sm">{errors.message}</div>}
    </div>
  );
}

export default FormWrapper;
