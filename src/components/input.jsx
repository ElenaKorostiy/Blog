import { forwardRef } from "react";

export const InputField = forwardRef(({ label, name, onChange, onBlur}, ref) => (
  <label>
    {label}
        <input
        ref={ref}
        name={name}
        onChange={onChange}
        onBlur={onBlur}   
        />
  </label>
));