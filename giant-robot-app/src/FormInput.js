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

  const showError = required && !value;

  return (
    <>
      <div className="flex">
        <label className="pb-1 text-12 text-label-grey">{label}</label>
        {showError && <span className="text-error ml-1">REQUIRED</span>}
      </div>
      <input
        className={
          showError
            ? "h-12 border border-error bg-white rounded-md mb-6 text-label-grey font-sans text-14 pl-4" :
            !focused ? "bg-input-grey h-12 border border-off-white rounded-md  mb-6 text-label-grey font-sans text-14 pl-4"
            : "bg-input-grey h-12 border focus:bg-white focus:border-active-border rounded-md  mb-6 text-label-grey font-sans text-14 pl-4"
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
