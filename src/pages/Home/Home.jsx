/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import JobCard from "../../components/jobCard/JobCard";
import { Link } from "react-router";
import CategoriySection from "../../components/categoriy/CategoriySection";
import AboutSection from "../../components/aboutSection/AboutSection";
import Banner from "../../components/banner/Banner";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const allJobsFeatch = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          "https://freelance-market-place-server-side.vercel.app/latest-jobs"
        );
        setJobs(res.data);
        setLoading(false);
        // console.log(res.data);
      } catch (error) {
        setError(error.message);
      }
    };

    allJobsFeatch();
  }, []);
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p className="text-red-500 text-xl">{error}</p>;
  //   console.log("all job data", jobs);

  return (
    <>
      {/* banner section */}
      <div>
        <Banner></Banner>
      </div>
      {/* latest job */}
      <div className="py-5 md:py-6 lg:py-8 mb-5">
        <h1 className="text-4xl text-[#0F172A] font-bold mb-4 text-center">
          Latest Job Opportunities
        </h1>
        <p className="text-lg text-[#707C90] font-sans text-center">
          Discover the newest jobs posted on our platform
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
      {/*  */}
      <Link to={"/all-job"} className=" mt-10  flex flex-col items-center">
        <motion.button
          className=" text-white bg-[#0B74FF] hover:bg-[#075ED6] py-3 px-8 rounded-lg"
          whileTap={{ scale: 0.99 }}
          whileHover={{ scale: 1.01, transition: { yoyo: Infinity } }}
        >
          View All Job
        </motion.button>
      </Link>
      {/* category section */}
      <div className="mt-10">
        <CategoriySection />
      </div>
      {/* about section add */}
      <div className="my-10">
        <AboutSection></AboutSection>
      </div>
    </>
  );
};

export default Home;
