import "./App.css";
import Logo from "./assets/GiantRobotLTD_Logo.svg";

export default function App() {
  return (
    <div
      className="
        flex 
        flex-col
        sm:flex-row
        h-screen">
      <header
        className="
        pl-6
        pt-8
        sm:py-8
        sm:pr-20
        sm:pl-80
      bg-grey">
        <div>
          <img src={Logo} className="h-26 w-177" alt="giant robot logo" />
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
        pl-6
        w-376
        text-16
        text-grey
        sm:mt-20
        mt-8"
        >
          <label htmlFor="firstName" className="pb-1">
            FIRST NAME
          </label>
          <input 
          className="
        bg-gray-100 
          h-12 
          border 
          focus:bg-transparent 
          rounded-md 
          mb-6">
          </input>

          <label htmlFor="firstName" className="pb-1">
            FIRST NAME
          </label>
          <input
            id="firstName"
            className="bg-gray-100 h-12 border focus:bg-transparent rounded-md mb-6"
          ></input>

          <label htmlFor="lastName" className="pb-1">
            LAST NAME
          </label>
          <input
            id="lastName"
            className="bg-gray-100 h-12 border focus:bg-transparent rounded-md mb-6"
          ></input>

          <label htmlFor="address" className="pb-1">
            ADDRESS
          </label>
          <input
            id="address"
            className="bg-gray-100 h-12 border focus:bg-transparent rounded-md mb-6"
          ></input>

          <label htmlFor="address2" className="pb-1">
            ADDRESS 2 (OPTIONAL)
          </label>
          <input
            id="address2"
            className="bg-gray-100 h-12 border focus:bg-transparent rounded-md mb-6"
          ></input>
          <button
            type="submit"
            className="bg-citrus w-376 sm:w-28 mt-12 h-12 rounded-md text-white"
          >
            {" "}
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
