/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContex";
import axios from "axios";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { Calendar, Clock, SquarePen, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyAddedJobs = () => {
  const { user } = use(AuthContext);
  //   console.log(user);
  const [myJobs, setMyJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    const allJobsFeatch = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `https://freelance-market-place-server-side.vercel.app/my-jobs?email=${user?.email}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        setMyJobs(res.data);
        setLoading(false);
        // console.log(res.data);
      } catch (error) {
        setError(error.message);
      }
    };

    allJobsFeatch();
  }, [user, refetch]);
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p className="text-red-500 text-xl">{error}</p>;

  // my post job delete
  const handleDelete = (id) => {
    console.log("delete id", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://freelance-market-place-server-side.vercel.app/jobs/${id}`,
          {
            method: "DELETE",
          }
        );
        setRefetch(!refetch);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
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
            <p>{hours} hours ago</p>
          </div>
        </>
      );
    }
    if (days < 30) {
      return (
        <>
          <div className="flex items-center gap-1">
            <Calendar size={16} strokeWidth={1.5} />
            <p>{days} days ago</p>
          </div>
        </>
      );
    }
    return created.toLocaleDateString("en-GB");
  };
  return (
    <>
      <div className="py-5 md:py-8 lg:py-10 mb-5">
        <h1 className="text-4xl text-[#0F172A] font-bold mb-4">
          My Posted Jobs
        </h1>
        <p className="text-lg text-[#707C90] font-sans">
          Manage all your job postings in one place, track applications, and
          stay on top of your recruitment process with ease.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {myJobs.map((job, indext) => (
          <div key={indext._id}>
            <div className="p-5 w-full bg-white hover:scale-101 transition-all duration-300 cursor-pointe rounded-2xl border border-gray-300">
              <div className="">
                <div className="flex justify-between items-center">
                  <p className="px-3 py-1 text-[#0F172A] bg-[#1caa50b4] rounded-2xl">
                    {job.category}
                  </p>
                  <div className="text-sm text-gray-700  my-2">
                    {dateFormate(job.date)}
                  </div>
                </div>
                <h2 className="text-[#0F172A] font-semibold text-2xl mt-3">
                  {job.title}
                </h2>
                <p className="text-lg font-sans text-gray-700 mt-5">
                  {job.description.split(" ").slice(0, 14).join(" ") + "..."}
                </p>
              </div>
              {/* button */}
              <div className="flex flex-col lg:flex-row justify-between items-center gap-3 md:gap-5 lg:gap-10 mt-5">
                {/* update button */}
                <Link to={`/update-job/${job._id}`} className="w-full ">
                  <motion.button
                    className="flex justify-center items-center gap-2 w-full text-xl font-medium text-[#0F172A] border border-gray-200 bg-gray-100 hover:bg-orange-500 hover:text-white  py-3 px-3 rounded-lg "
                    whileTap={{ scale: 0.99 }}
                    whileHover={{
                      scale: 1.01,
                      transition: { yoyo: Infinity },
                    }}
                  >
                    <SquarePen size={18} />
                    <span>Update</span>
                  </motion.button>
                </Link>
                {/* delete button */}
                <div onClick={() => handleDelete(job._id)} className="w-full">
                  <motion.button
                    className="flex justify-center items-center gap-2 w-full text-xl font-medium  border border-gray-200 bg-[#e63946]  text-white  py-3 px-3 rounded-lg "
                    whileTap={{ scale: 0.99 }}
                    whileHover={{
                      scale: 1.01,
                      transition: { yoyo: Infinity },
                    }}
                  >
                    <Trash2 size={18} /> <span>Delete</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyAddedJobs;
