/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { Mail, User, Clock, Calendar } from "lucide-react";
import { AuthContext } from "../../context/AuthContex";
import { toast } from "react-toastify";

const JobDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { title, category, date, description, image, userName, userEmail } =
    details;
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(
          `https://freelance-market-place-server-side.vercel.app/jobs/${id}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        setDetails(res.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchJobDetails();
  }, [id, user]);
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p className="text-red-500 text-xl">{error}</p>;
  // accept job button
  const handleAcceptJob = () => {
    //
    const postUserEmail = details.userEmail;
    const logingUserEmail = user?.email;
    console.log("post user email", postUserEmail);
    console.log("loging user email", logingUserEmail);
    if (logingUserEmail === postUserEmail) {
      return toast.error("You cannot accept own posted job!");
    }
    //
    const title = details.title;
    const category = details.category;
    const description = details.description;
    const image = details.image;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const jobId = details._id;
    const now = new Date();
    const date = now.toISOString();
    const acceptJob = {
      title,
      category,
      description,
      image,
      userName,
      userEmail,
      date,
      postUserEmail,
      jobId,
    };
    // console.log(acceptJob);
    // accept job data send to server side
    fetch(`https://freelance-market-place-server-side.vercel.app/accept-jobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(acceptJob),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          toast.error(data.message);
          return;
        }
        if (data.insertedId) {
          toast.success(`${title} your job acceptded successfully!`);
          // navigate to all job page
          navigate("/all-job");
        }
      })

      .catch((err) => {
        toast.error(err);
      });
  };
  // console.log(details);
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
              onClick={handleAcceptJob}
              className=" text-xl font-medium  border border-gray-200  bg-[#0B74FF]  text-white hover:bg-[#075ED6]  py-3 px-6 rounded-lg mb-2"
              whileTap={{ scale: 0.99 }}
              whileHover={{ scale: 1.01, transition: { yoyo: Infinity } }}
            >
              Accept Job
            </motion.button>
          </div>

          <div className="flex items-center gap-1 text-sm font-sans text-gray-700 ">
            <User size={18} strokeWidth={1.5} />

            <p>{userName}</p>
          </div>
          <div className="text-sm text-gray-700  my-2">{dateFormate(date)}</div>
          <div className="flex items-center gap-1 text-sm font-sans text-gray-700 ">
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
