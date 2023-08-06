import "./App.css";
import { useState } from "react";
import FormInput from "./FormInput";
import Logo from "./assets/GiantRobotLTD_Logo.svg";
import Arrow from "./assets/White_Arrow.svg";

export default function App() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    address: '',
    address2: ''
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
    }
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
      let fieldValuesString = "Form values:\n";
      for (const input of inputs) {
        fieldValuesString += `${input.label}: ${formValues[input.name]}\n`;
      }
      alert(fieldValuesString);
    }  else {
      alert("Please fill in all required fields.");

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
        sm:h-screen">
      <header
        className="
        pl-6
        pt-8
        sm:py-8
        sm:pr-20
        sm:pl-80
      bg-grey">
        <div>
          <img src={Logo} className="h-26 w-177" alt="giant robot logo"/>
          <h1
            className="
              header-title 
              font-bold 
              text-white 
              text-32 
              leading-none 
              pt-8 
              pb-4">Welcome
          </h1>
          <h3 className="text-off-white pb-8">
            Please tell us a bit about yourself to get started.
          </h3>
        </div>
      </header>
      <div>
        <form
          className="
            font-serif
            flex
            flex-col
            mx-auto
            w-376
            sm:ml-8
            text-xs
          text-label-grey
            sm:mt-20
            mt-8"
            onSubmit={handleSubmit}
        >
        {inputs.map((input) => (
          <FormInput
            {...input}
            value={formValues[input.name]}
            onChange={handleChange}
          />
        ))}
          <button
            className="bg-citrus w-376 sm:w-28 mt-12 h-12 rounded-md text-white flex items-center justify-center">
            <p>Next</p> 
            <img src={Arrow} className="h-2.5 w-2.5 m-2" alt="right-arrow"/>
          </button>
        </form>
      </div>
    </div>
  );
}
