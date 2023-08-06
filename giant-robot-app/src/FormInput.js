import { useState } from "react";

export default function FormInput(props) {
  const [focused, setFocused] = useState(true);

  const { label, onChange, name, value, required } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  const handleBlur = (e) => {
    setFocused(false);
  };

  const showError = required && !value && !focused;

  return (
    <>
      <div className="flex">
        <label className="pb-1 text-12 text-label-grey">{label}</label>
        {showError && <span className="text-invalid ml-1">REQUIRED</span>}
      </div>
      <input
        className={
          showError
            ? "bg-input-grey h-12 border border-invalid focus:bg-white rounded-md mb-6"
            : "bg-input-grey h-12 border border-off-white focus:bg-white focus:border-active-border rounded-md  mb-6"
        }
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </>
  );
}
