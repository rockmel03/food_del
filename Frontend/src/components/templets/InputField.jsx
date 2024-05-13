import React, { useId } from "react";

const InputField = React.forwardRef(function InputField(
  { label, type, className, ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        ref={ref}
        id={id}
        type={type || "text"}
        className={`px-4 py-2 bg-transparent text-inherit rounded ${className} w-full`}
        {...props}
      />
    </div>
  );
});

export default InputField;
