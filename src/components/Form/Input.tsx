import { FieldValues, useController } from "react-hook-form";
import { InputProps } from "./type";
import FormWrapper from "./FormWrapper";

function Input<TFieldValues extends FieldValues>({
  name,
  control,
  type,
  label,
  placeholder,
}: InputProps<TFieldValues>) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const { onChange, value } = field;
  return (
    <FormWrapper errors={error} label={label}>
      <input
        className="bg-gray-950 focus-within:border-0 flex w-full p-2 rounded-md"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </FormWrapper>
  );
}

export default Input;
