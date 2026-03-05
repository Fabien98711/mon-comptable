import { useState, type ReactNode } from "react";

type InputType =
  | "text"
  | "password"
  | "checkbox"
  | "button"
  | "email"
  | "image"
  | "tel"
  | "file";

type Props = {
  placeHolder: string;
  type: InputType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string; // optionnel
};

function Input({ type, placeHolder, value, onChange, accept }: Props) {
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        className="input input-primary text-sm w-full"
        value={value}
        onChange={onChange}
        accept={accept}
      ></input>
    </>
  );
}

export default Input;
