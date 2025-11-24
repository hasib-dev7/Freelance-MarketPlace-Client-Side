/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { use } from "react";
import { AuthContext } from "../../context/AuthContex";

const AddJob = () => {
  const { user } = use(AuthContext);
  //   console.log(user.email);
  const emailAddress =
    user.email || (user.providerData[0] && user.providerData[0].email);
  console.log(emailAddress);
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const message = "Post a New Job";
  const word = message.split(" ");
  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="show"
        className=" w-full max-w-2xl mx-auto my-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/40 "
      >
        <h2 className="text-2xl font-semibold text-gray-800  mb-3">
          {word.map((text, indext) => (
            <motion.span
              key={indext}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: indext * 0.2,
                ease: "easeInOut",
              }}
            >
              {text}{" "}
            </motion.span>
          ))}
        </h2>
        <p className="text-[#707C90] font-sans">
          Fill in the details below to post your job opportunity
        </p>
        <form className="space-y-4">
          {/* jobs title */}
          <div className=" mt-5">
            <label className=" text-gray-800 font-medium text-sm ">
              {" "}
              Job Title
            </label>
            <input
              type="text"
              name="job-title"
              required
              className="w-full border-2 bg-[#f8f9fb] border-gray-300 rounded-lg px-4 py-2 mt-2 outline-none transition focus:border-indigo-400"
            />
          </div>
          {/* Posted By */}
          <div className=" mt-5">
            <label className=" text-gray-800 font-medium text-sm ">
              Posted By
            </label>
            <input
              type="text"
              name="post-user-name"
              value={user?.displayName}
              readOnly
              className="w-full border-2 bg-[#f8f9fb] border-gray-300 rounded-lg px-4 py-2 mt-2 outline-none transition focus:border-indigo-400 text-gray-700  text-sm font-sans"
            />
          </div>
          {/* Category */}
          <div className="w-full mt-5 space-y-2">
            {/* Label */}
            <label
              htmlFor="category"
              className="block text-gray-800 font-semibold text-sm"
            >
              Category
            </label>

            {/* Select */}
            <div className="relative">
              <select
                name="category"
                required
                className="w-full h-10 px-3 pr-8 py-2 text-gray-700 text-sm bg-[#f8f9fb] border-2 border-gray-300 rounded-lg appearance-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-300 outline-none transition"
                defaultValue="" // Placeholder default
              >
                {/* Placeholder */}
                <option value="" disabled>
                  Select a category
                </option>

                {/* Options */}
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="graphics-design">Graphics Design</option>
                <option value="content-writing">Content Writing</option>
              </select>

              {/* Dropdown arrow icon */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Job Summary */}
          <div className=" mt-5">
            <label className=" text-gray-800 font-medium text-sm ">
              Job Summary
            </label>
            <textarea
              type="text"
              name="job-summary"
              required
              className="w-full border-2 bg-[#f8f9fb] border-gray-300 rounded-lg px-4 py-2 mt-2 outline-none transition focus:border-indigo-400 text-gray-700  text-sm font-sans  placeholder-gray-700"
              placeholder="Describe the job requirements and responsibilities..."
              rows={5}
            />
          </div>
          {/* cover image */}
          <div className=" mt-5">
            <label className=" text-gray-800 font-medium text-sm ">
              Cover Image URL
            </label>
            <input
              type="text"
              name="cover-image"
              required
              className="w-full border-2 bg-[#f8f9fb] border-gray-300 rounded-lg px-4 py-2 mt-2 outline-none transition focus:border-indigo-400 text-gray-700  text-sm font-sans  placeholder-gray-700"
              placeholder="https://example.com/image.jpg"
              rows={5}
            />
          </div>
          {/* Posted By email */}
          <div className=" mt-5">
            <label className=" text-gray-800 font-medium text-sm ">
              Your Email
            </label>
            <input
              type="text"
              name="post-user-email"
              value={emailAddress}
              readOnly
              className="w-full border-2 bg-[#f8f9fb] border-gray-300 rounded-lg px-4 py-2 mt-2 outline-none transition focus:border-indigo-400 text-gray-700  text-sm font-sans"
            />
          </div>
          {/* Posted By email */}
          <div className=" mt-5">
            <motion.button
              className="w-full text-white bg-[#0B74FF] hover:bg-[#075ED6] py-3 px-3 rounded-lg"
              whileTap={{ scale: 0.99 }}
              whileHover={{ scale: 1.01, transition: { yoyo: Infinity } }}
            >
             Post Job
            </motion.button>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default AddJob;
