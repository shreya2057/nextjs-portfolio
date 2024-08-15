import { HTMLInputTypeAttribute } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

export type InputProps<TFieldValues extends FieldValues> = {
  type?: HTMLInputTypeAttribute;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  placeholder?: string;
};
