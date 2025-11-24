/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { Mail, User, Clock } from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { title, category, date, description, image, userName, userEmail } =
    details;
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(`http://localhost:8000/jobs/${id}`);
        setDetails(res.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchJobDetails();
  }, [id]);
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p className="text-red-500 text-xl">{error}</p>;
  console.log(details);
  //   date formating
  const dateFormate = (dataString) => {
    const now = new Date();
    const created = new Date(dataString);
    const diff = now - created;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (hours < 24) {
      return (
        <>
          <div className="flex items-center gap-1">
            <Clock size={16} strokeWidth={1.5} />
            <p>${hours} hours ago</p>
          </div>
        </>
      );
    }
    if (days < 30) {
      return `${days} days ago`;
    }
    return created.toLocaleDateString("en-GB");
  };
  return (
    <>
      <div className="my-5 md:my-8 lg:my-10 w-full bg-white hover:scale-101 transition-all duration-300 cursor-pointe rounded-2xl">
        <img
          className="w-full h-100 overflow-hidden rounded-tr-2xl rounded-tl-2xl"
          src={image}
          alt={title}
        />
        <div className="px-5">
          <button className="mt-5 px-3 py-1 text-[#0F172A] bg-[#1caa50b4] rounded-2xl">
            {category}
          </button>

          <div className="flex justify-between items-center">
            <h2 className="text-[#0F172A] font-semibold text-2xl mt-3">
              {title}
            </h2>
          
              <motion.button
                className=" text-xl font-medium  border border-gray-200  bg-[#0B74FF]  text-white hover:bg-[#075ED6]  py-3 px-6 rounded-lg mb-5"
                whileTap={{ scale: 0.99 }}
                whileHover={{ scale: 1.01, transition: { yoyo: Infinity } }}
              >
                Accept Job
              </motion.button>
           
          </div>

          <div className="flex items-center gap-1 text-sm font-sans text-gray-700 mt-1">
            <User size={18} strokeWidth={1.5} />

            <p>{userName}</p>
          </div>
          <p className="text-sm text-gray-700  ">{dateFormate(date)}</p>
          <div className="flex items-center gap-1 text-sm font-sans text-gray-700 mt-1">
            <Mail size={16} strokeWidth={1.5} />
            <p>{userEmail}</p>
          </div>
          <p className="text-lg font-sans text-gray-700 mt-5">{description}</p>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
