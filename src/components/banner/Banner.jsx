/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import bannerImg from "../../assets/hero-image.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#0B74FF] to-[#57A5FF] text-white py-16">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* --- Text Section --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Find the Perfect Freelancer <br /> For Your Next Big Project
            </h1>

            <p className="mt-5 text-lg text-gray-200">
              Our marketplace platform is trusted by thousands of businesses and
              freelancers worldwide. Safe, reliable and fast!
            </p>

            <div className="mt-8 flex gap-4">
              {/* Button 1 */}
              <a href="#abut">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg"
                >
                  How Reliable is this Platform?
                </motion.button>
                s
              </a>

              {/* Button 2 - Primary */}
              <Link to={"/add-job"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg"
                >
                  Create a Job
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* --- Image Section --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src={bannerImg}
              alt="banner"
              className="w-[80%] lg:w-full drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
