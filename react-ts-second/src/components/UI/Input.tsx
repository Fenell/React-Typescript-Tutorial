import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithRef<"input">;

const Input = ({ id, label, ref, ...props }: InputProps) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
};

export default Input;
