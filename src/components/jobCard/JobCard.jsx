/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Link } from "react-router";
const JobCard = ({ job }) => {
  const { title, category, userName, description, image,_id } = job;

  return (
    <>
      <div className="w-full bg-white hover:scale-101 transition-all duration-300 cursor-pointe rounded-2xl">
        <img className="w-full h-52 overflow-hidden rounded-tr-2xl rounded-tl-2xl" src={image} alt={title} />
        <div className="px-5">
          <div className="flex justify-between items-center mt-5">
            <p className="px-3 py-1 text-[#0F172A] bg-[#1caa50b4] rounded-2xl">
              {category}
            </p>
          
          </div>
          <h2 className="text-[#0F172A] font-semibold text-2xl mt-3">
            {title}
          </h2>
          <div className="flex items-center gap-1 text-sm font-sans text-gray-700 mt-1">
            <User size={18} strokeWidth={1.5} />

            <p>{userName}</p>
          </div>
          <p className="text-lg font-sans text-gray-700 mt-5">{description.split(" ").slice(0,11).join(" ")+"..."}</p>
          <div className=" mt-5">
            <Link to={`/job-details/${_id}`}>
            <motion.button
              className="w-full text-xl font-medium text-[#0F172A] border border-gray-200 bg-gray-100 hover:bg-[#0B74FF] hover:text-white  py-3 px-3 rounded-lg mb-5"
              whileTap={{ scale: 0.99 }}
              whileHover={{ scale: 1.01, transition: { yoyo: Infinity } }}
            >
              View Details
            </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
