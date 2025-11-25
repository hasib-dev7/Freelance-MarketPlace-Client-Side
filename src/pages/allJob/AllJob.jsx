import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import JobCard from "../../components/jobCard/JobCard";

const AllJob = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const allJobsFeatch = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get("http://localhost:8000/jobs");
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
      <div className="py-5 md:py-8 lg:py-10 mb-5">
        <h1 className="text-4xl text-[#0F172A] font-bold mb-4">All Jobs</h1>
        <p className="text-lg text-[#707C90] font-sans">
          Browse through all available job opportunities, explore different
          roles, and find the perfect match for your skills and career goals.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </>
  );
};

export default AllJob;
