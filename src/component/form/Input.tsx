import { useState, type ReactNode } from "react";

type InputType =
  | "text"
  | "password"
  | "checkbox"
  | "button"
  | "email"
  | "image"
  | "tel";

type Props = {
  placeHolder: string;
  type: InputType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ type, placeHolder, value, onChange }: Props) {
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        className="input input-primary text-xl {type}==='password'&& input-"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}

export default Input;
