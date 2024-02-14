import { useState } from "react";
import Card from "./Card"
import { FaQuoteLeft, FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Testimonial = (props) => {
    const reviews= props.reviews;
    const n= reviews.length;
    const [index, setIndex]= useState(0);
    function leftHandler(){
      if(index==0){
        setIndex(n-1);
      }
      else{
        setIndex(index-1);
      }
    }
    function rightHandler(){
      if(index==n-1){
        setIndex(0);
      }
      else{
        setIndex(index+1);
      }
    }
    function surpriseHandler(){
      setIndex(Math.floor(Math.random()*n));
    }
  return (
    <div className="w-11/12 max-w-[700px] bg-white mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      
      <Card review={reviews[index]} />
      
      <div className="flex flex-row gap-3 mt-7 justify-center font-bold text-violet-400">
        <button className="cursor-pointer hover:text-violet-500" onClick={leftHandler}><FaChevronLeft /></button>
        <button className="cursor-pointer hover:text-violet-500" onClick={rightHandler}><FaChevronRight /></button>
      </div>
      <div className="flex justify-center">
        <button onClick={surpriseHandler} className="mt-7 text-white text-lg bg-violet-400 hover:bg-violet-500 transition-all duration-300 px-10 py-2 rounded-md font-bold ">
            Suprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonial
