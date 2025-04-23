import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ReactNode } from "react";
import { ContactFormData } from "../types/form";

interface InputProps {
  id: string;
  type?: string;
  register: UseFormRegister<ContactFormData>;
  isSubmitting: boolean;
  showValidation: boolean;
  errors: FieldErrors<ContactFormData>;
}

export default function Input({
  id,
  type = "text",
  register,
  isSubmitting,
  showValidation,
  errors,
}: InputProps) {
  return (
    <div className="flex-1">
      <input
        id={id}
        type={type}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        {...register(id as keyof ContactFormData)}
        disabled={isSubmitting}
      />
      {showValidation && errors && errors[id as keyof ContactFormData] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[id as keyof ContactFormData]?.message as ReactNode}
        </p>
      )}
    </div>
  );
}
