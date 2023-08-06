import { useState } from "react";

export default function FormInput (props) {
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
        <label className="pb-1">{label}</label>
      {showError && <span className="text-red-500 ml-1">REQUIRED</span>}
      </div>
       <input
        className="
        bg-gray-100 
          h-12 
          border 
          focus:bg-transparent 
          rounded-md 
          mb-6"
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </>
  );
};

