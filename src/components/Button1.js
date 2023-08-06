export default function Button1() {
  return (
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
  );
}
