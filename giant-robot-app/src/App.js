import "./App.css";
import { useState } from "react";
import Logo from "./assets/GiantRobotLTD_Logo.svg";
import Arrow from "./assets/White_Arrow.svg";
import FormInput from "./FormInput";

export default function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
  });

  const inputs = [
    {
      name: "firstName",
      label: "FIRST NAME",
      required: true,
    },
    {
      name: "lastName",
      label: "LAST NAME",
      required: true,
    },
    {
      name: "address",
      label: "ADDRESS",
      required: true,
    },
    {
      name: "address2",
      label: "ADDRESS 2 (OPTIONAL)",
      required: false,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    let allRequiredFieldsFilled = true;

    for (const input of inputs) {
      if (input.required && !formValues[input.name]) {
        allRequiredFieldsFilled = false;
        break;
      }
    }

    if (allRequiredFieldsFilled) {
      let fieldValuesString = "User Data:\n";
      for (const input of inputs) {
        if (input.name === "address2" && !formValues[input.name]) {
          continue;
        }
        fieldValuesString += `${input.label}: ${formValues[input.name]}\n`;
      }
      alert(fieldValuesString);
      window.location.reload();
    } else {
      alert("Please fill in all required fields.");
      return;
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="
        flex 
        flex-col
        sm:flex-row
        h-screen
        w-376
        sm:w-auto
        "
    >
      <div
      className="
      flex
      flex-col
      py-8
      px-8
      sm:ps-32
      sm:pr-20
      bg-grey">
        <header
          className="
        sm:h-screen"
        >
          <img src={Logo} className="h-26 w-177" alt="giant robot logo" />
          <h1
            className="
            font-sans
              font-bold 
              text-white 
              text-24
              sm:text-32 
              leading-none 
              pt-8 
              pb-4"
          >
            Welcome
          </h1>
          <h3 className="text-off-white text-14 font-serif">
            Please tell us a bit about yourself to get started.
          </h3>
        </header>
      </div>
      <div className="px-6">
        <form
          className="
            font-serif
            flex
            flex-col
            text-xs
            sm:w-376
            
            sm:mt-20
            mt-8">
          {inputs.map((input) => (
            <FormInput
              {...input}
              value={formValues[input.name]}
              onChange={handleChange}
            />
          ))}
          <button
            type="submit"
            onClick={handleSubmit}
            className="
            bg-citrus 
            sm:px-6 
            sm:w-28
             mt-6 
             h-12 
             rounded-md  
             flex 
             items-center 
             justify-center"
          >
            <p className="font-sans font-bold text-white text-16">Next</p>
            <img src={Arrow} className="h-2.5 w-2.5 m-2" alt="right-arrow" />
          </button>
        </form>
      </div>
    </div>
  );
}
