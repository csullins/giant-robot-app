import "./App.css";
import { useState } from "react";
import Logo from "./assets/GiantRobotLTD_Logo.svg";
import Arrow from "./assets/White_Arrow.svg";
import FormInput from "./components/FormInput";

export default function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
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
      name: "phone",
      label:"PHONE",
      required: false,
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
    if (e.target.name === "phone") {
  
      let rawValue = e.target.value;

      let formattedValue = rawValue.replace(/[^0-9]/g, "")

      if (formattedValue.length > 10) {
        formattedValue = formattedValue.slice(0, 10)
      }
      
      if (formattedValue.length >= 3 && formattedValue.length <= 6) {
        formattedValue = `(${formattedValue.slice(0, 3)}) ${formattedValue.slice(3)}`;
      } else if (formattedValue.length >= 7) {
        formattedValue = `(${formattedValue.slice(0, 3)}) ${formattedValue.slice(3, 6)}-${formattedValue.slice(6)}`;
      }
  
      setFormValues({ ...formValues, [e.target.name]: formattedValue });
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    } 
  }

  return (
    <div
      className="
        flex 
        flex-col
        sm:flex-row
        min-h-screen
        bg-grey
        sm:w-screen
        sm:justify-center
        "
    >
      <div
        className="
      flex
      flex-col
      py-8
      px-8
      sm:w-full
      sm:pr-20
     "
      >
        <header
          className="
        flex
        flex-col
        sm:ml-auto
        sm:h-screen
        sm:w-455"
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
      <div className="px-6 bg-white sm:w-full">
        <form
          className="
            font-serif
            flex
            flex-col
            text-xs
            h-screen
            sm:w-376
            sm:mt-20
            mt-8"
        >
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
