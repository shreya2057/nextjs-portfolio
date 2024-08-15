import { FieldValues, useController } from "react-hook-form";
import { InputProps } from "./type";
import FormWrapper from "./FormWrapper";

function TextArea<TFieldValues extends FieldValues>({
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
      <textarea
        className="bg-gray-950 focus-within:border-0 flex w-full p-2 rounded-md resize-none"
        onChange={onChange}
        value={value}
        rows={5}
        placeholder={placeholder}
      />
    </FormWrapper>
  );
}

export default TextArea;
