import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props {
  type: React.HTMLInputTypeAttribute;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  autoComplete?: string;
}

export default function Input({
  name,
  register,
  type,
  className,
  errorMessage,
  placeholder,
  rules,
  autoComplete
}: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        {...register(name, rules)}
        className='w-full rounded-sm border-[1px] border-gray-300 p-3 outline-none 
                  focus:border-gray-500 focus:shadow-sm'
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>
    </div>
  );
}
