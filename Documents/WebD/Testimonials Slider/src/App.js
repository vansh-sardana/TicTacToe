import React from "react";
import Testimonial from "./Components/Testimonial"
import reviews from "./data";

const App = () => {
  return (
    <div className="min-h-[100vh] relative bg-gray-200 flex flex-col justify-center items-center">
      <h1 className=" text-4xl font-[700] text-center">Our Testimonials</h1>
      <div className=' w-40 mt-1 h-1 bg-purple-400'></div>
      <Testimonial reviews={reviews}/>
    </div>
  )
};

export default App;
