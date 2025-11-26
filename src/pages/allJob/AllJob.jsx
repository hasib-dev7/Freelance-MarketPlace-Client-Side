import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import JobCard from "../../components/jobCard/JobCard";

const AllJob = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortType, setSortType] = useState("date_desc");
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `https://freelance-market-place-server-side.vercel.app/jobs?sort=${sortType}`
        );
        setJobs(res.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchJobs();
  }, [sortType]);
  // const [sortType, setSortType] = useState("date_desc");
  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get(
  //         `https://freelance-market-place-server-side.vercel.app/jobs?sort=${sortType}`
  //       );
  //       setJobs(res.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchJobs();
  // }, [sortType]);

  // .................
  //

  //
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p className="text-red-500 text-xl">{error}</p>;
  //   console.log("all job data", jobs);

  return (
    <>
      <div className="py-5 md:py-8 lg:py-10 mb-5">
        <h1 className="text-4xl text-[#0F172A] font-bold mb-4">All Jobs</h1>
        <p className="text-lg text-[#707C90] font-sans">
          Browse through all available job opportunities, explore different
          roles, and find the perfect match for your skills and career goals.
        </p>
      </div>
      {/* ......... */}
      {/* Sorting Buttons */}
      <div className="flex items-center gap-3 mb-5">
        {/* newest first */}
        <button 
        onClick={()=>setSortType("date_desc")}
        className={`px-4 py-2 rounded-md ${
          sortType==="date_desc"?"bg-[#0B74FF] text-white":"bg-gray-200 text-black"
        }`}
        >Newest First</button>
        {/* oldest first */}
        <button
        onClick={()=>setSortType("date_asc")}
        className={`px-4 py-2 rounded-md ${
          sortType==="date_desc"?"bg-[#0B74FF] text-white":"bg-gray-200 text-black"
        }`}
        
        >
          Oldest First
        </button>
      </div>
      {/* <div className="flex items-center gap-3 mb-5">
        <button
          onClick={() => setSortType("date_desc")}
          className={`px-4 py-2 rounded-md ${
            sortType === "date_desc"
              ? "bg-[#0B74FF] text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Newest First
        </button>

        <button
          onClick={() => setSortType("date_asc")}
          className={`px-4 py-2 rounded-md ${
            sortType === "date_asc"
              ? "bg-[#0B74FF] text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Oldest First
        </button>
      </div> */}

      {/* ............ */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </>
  );
};

export default AllJob;
