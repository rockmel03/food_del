import React, { useId } from "react";

export const InputField = React.forwardRef(function InputField(
  { label, type, className, ...rest },
  ref
) {
  const id = useId();
  return (
    <>
      {label && <label htmlFor={id} className="opacity-80">{label}</label>}
      <input
        type={type || "text"}
        id={id}
        ref={ref}
        className={`w-full bg-transparent text-inherit px-4 py-2 rounded  ${className}`}
        {...rest}
      />
    </>
  );
});
