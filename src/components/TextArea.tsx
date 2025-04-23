import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ReactNode } from "react";
import { ContactFormData } from "../types";

interface TextAreaProps {
  id: string;
  rows?: number;
  register: UseFormRegister<ContactFormData>;
  isSubmitting: boolean;
  showValidation: boolean;
  errors: FieldErrors<ContactFormData>;
}

export default function TextArea({
  id,
  rows = 5,
  register,
  isSubmitting,
  showValidation,
  errors,
}: TextAreaProps) {
  return (
    <div className="flex-1">
      <textarea
        id={id}
        rows={rows}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        {...register(id as keyof ContactFormData)}
        disabled={isSubmitting}
      ></textarea>
      {showValidation && errors && errors[id as keyof ContactFormData] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[id as keyof ContactFormData]?.message as ReactNode}
        </p>
      )}
    </div>
  );
}
