import { FieldValues } from "react-hook-form";
import Input from "./Input";
import { InputProps } from "./type";
import TextArea from "./TextArea";

function FormControl<TFieldValues extends FieldValues>({
  inputControl,
  ...rest
}: FormControlProps<TFieldValues>) {
  switch (inputControl) {
    case "input":
      return <Input {...(rest as InputProps<TFieldValues>)} />;
    case "textarea":
      return <TextArea {...(rest as InputProps<TFieldValues>)} />;
  }
}

export default FormControl;

type FormControlProps<TFieldValues extends FieldValues> = {
  inputControl: "input" | "textarea";
} & InputProps<TFieldValues>;
