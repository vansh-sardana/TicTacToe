import { FaQuoteLeft, FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
const Card = ({review}) => {
  return (
    <div className="flex flex-col text-center md:relative">
      <div className="absolute -top-28 left-4">
        <img className="rounded-full aspect-square w-[140px] h-[140px] z-30 relative" src={review.image} alt="" />
        <div className="w-[140px] h-[140px] rounded-full bg-violet-500 z-20 top-[-6px] left-2.5 absolute">

        </div>
      </div>
      <div className=" mt-7">
        <p className="tracking-wider text-2xl font-bold capitalize">
            {review.name}
        </p>
      </div>
      <div>
        <p className=" uppercase text-violet-300 text-sm">
            {review.job}
        </p>
      </div>
      <div className="text-violet-300 mt-7 mx-auto">
        <FaQuoteLeft  />
      </div>
      <div>
        <p className="text-slate-500 mt-4">
            {review.text}
        </p>
      </div>
      <div className="text-violet-300 mt-4 mx-auto">
        <FaQuoteRight/>
      </div>
      
    </div>
  )
}

export default Card
