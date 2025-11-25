/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import axios from "axios";
import { use, useEffect, useState } from "react";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { AuthContext } from "../../context/AuthContex";
import { Check, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyAcceptedTasks = () => {
  const { user } = use(AuthContext);
  const [accetpJobs, setAcceptJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    const allJobsFeatch = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `http://localhost:8000/accept-jobs?email=${user?.email}`
        );
        setAcceptJobs(res.data);
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
  //   console.log("accepted job data", accetpJobs);
  // handle delete accepted job
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/accept-jobs/${id}`, {
      method: "DELETE",
    });
    toast.error(` Task Cancelled!`);
    setRefetch(!refetch);
  };
  // handle done accepted job
  const handleDone = async (id) => {
    await fetch(`http://localhost:8000/accept-jobs/${id}`, {
      method: "DELETE",
    });
    toast.success(`Task Completed Successfully!`);
    setRefetch(!refetch);
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>cover image</th>
              <th>Title</th>
              <th>Posted By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {accetpJobs.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-400">
                  No accepted tasks found.
                </td>
              </tr>
            ) : (
              accetpJobs.map((job, index) => (
                <tr key={job._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={job.image} alt={job.title} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-xl text-[#0F172A] hover:text-[#0B74FF]">
                    {job.title}
                  </td>
                  <td className="text-[16px] text-gray-700 font-sans">
                    {job.postUserEmail}
                  </td>
                  <th>
                    <div className="flex gap-2">
                      {/* done button */}
                      <div onClick={() => handleDone(job._id)}>
                        <motion.button
                          className=" flex gap-1 items-center    border  bg-green-600 hover:bg-bg-green-700  text-white  py-1 px-4 rounded-lg "
                          whileTap={{ scale: 0.99 }}
                          whileHover={{
                            scale: 1.01,
                            transition: { yoyo: Infinity },
                          }}
                        >
                          <Check size={16} />
                          <span>Done</span>
                        </motion.button>
                      </div>
                      {/* delete button */}
                      <div onClick={() => handleDelete(job._id)}>
                        <motion.button
                          className="flex gap-1 items-center    border  bg-[#e63946] hover:bg-[#e61829]  text-white  py-1 px-4 rounded-lg "
                          whileTap={{ scale: 0.99 }}
                          whileHover={{
                            scale: 1.01,
                            transition: { yoyo: Infinity },
                          }}
                        >
                          <Trash2 size={16} />
                          <span>Delete</span>
                        </motion.button>
                      </div>
                    </div>
                  </th>
                </tr>
              ))
            )}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyAcceptedTasks;
