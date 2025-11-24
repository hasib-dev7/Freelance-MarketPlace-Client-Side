/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import Animation from "../../../components/animation/Animation";
import { use, useState } from "react";
import { AuthContext } from "../../../context/AuthContex";
import { toast } from "react-toastify";
import { Briefcase, Eye, EyeOff } from "lucide-react";
const Register = () => {
  const [toggle, setToggle] = useState(false);
  const { createUser, updateUserProfile, setUser, googleSignIn } =
    use(AuthContext);
  const navigate = useNavigate();
  const message = "Join TaskHub";
  const word = message.split(" ");
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  //   register from
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log("regiset value", name, email, photo, password);
    // ---------- NAME VALIDATION ----------
    if (name.length < 5) {
      toast.error("Name must be at least 5 characters long.");
      return;
    }
    // .........password validation..........
    //  minimum 6 characters
    if (password.length < 6) {
      // form reset
      e.target.reset();
      toast.error("Password must be at least 6 characters lons.");
      return;
    }
    //  lowercase & uppercase
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      // form reset
      e.target.reset();
      toast.error(
        "Password must include at least one uppercase and one lowercase letter."
      );
      return;
    }
    //  number
    if (!/\d/.test(password)) {
      // form reset
      e.target.reset();
      toast.error("Password must include at least one number.");
      return;
    }
    // ---------- FIREBASE REGISTRATION ----------
    try {
      const res = await createUser(email, password);
      const signUpUser = res.user;
      updateUserProfile({ displayName: name, photoURL: photo });
      setUser({ ...signUpUser, displayName: name, photoURL: photo });
      // console.log(signUpUser);
      // form reset
      e.target.reset();
      toast.success(`Welcome, ${name}! Your account has been created.`);
      // path  navigate to home page
      navigate("/");
      console.log(res);
    } catch (err) {
      // form reset
      e.target.reset();
      // customize Firebase error messages
      if (err.code === "auth/email-already-in-use") {
        toast.error("This email is already registered.");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Please enter a valid email address.");
      } else if (err.code === "auth/weak-password") {
        toast.error("Password is too weak. Please follow the rules.");
      } else {
        toast.error("Registration failed. Please try again."); // generic fallback
      }
      // console.log("Registration error:", err.code);
    }
  };
  // google login
  const handleGoogle = () => {
    googleSignIn().then((res) => {
      setUser(res.user);
      const userName = res.user.displayName || "User"; // fallback
      toast.success(`Welcome back, ${userName}! 🎉`, {});
      // path  navigate to home page
      navigate("/");
    });
  };
  // toggle password
  const hangleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-30 py-20 ">
        {/* animation */}
        <div>
          <Animation></Animation>
        </div>
        {/* register from */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          className=" w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/40 "
        >
          <div className="flex flex-col items-center justify-center">
            <p className="bg-[#0B74FF] h-18 w-18 flex justify-center items-center rounded-full">
              <Briefcase size={40} color="#ffffff" strokeWidth={1.5} />
            </p>
            <h2 className="text-2xl font-semibold text-[#0B74FF] text-center mb-6">
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
              Create your account and start your journey
            </p>
          </div>
          <form onSubmit={handleRegister} className="space-y-4 mt-5">
            {/* name */}
            <label className="label">Name </label>
            <input
              type="text"
              name="name"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none transition focus:border-indigo-400"
              placeholder="Enter Your Name"
            />
            {/* eamail address */}
            <label className="label"> Email </label>
            <input
              type="email"
              name="email"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none transition focus:border-indigo-400"
              placeholder="Enter Your Email"
            />
            {/*Photo URL, */}
            <label className="label"> Photo URL, </label>
            <input
              type="text"
              name="photo"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none transition focus:border-indigo-400"
              placeholder="Enter Your Photo URL"
            />
            {/*password */}
            <label className="label"> Password </label>
            <div className=" relative">
              <input
                type={toggle ? "text" : "password"}
                name="password"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none transition focus:border-indigo-400 "
                placeholder="Enter Your Password"
              />
              <button
                onClick={hangleToggle}
                className=" absolute btn btn-xs top-2 right-5"
              >
                {toggle ? (
                  <Eye size={16} strokeWidth={1.25} />
                ) : (
                  <EyeOff size={16} strokeWidth={1.25} />
                )}
              </button>
            </div>
            <div className=" mt-5">
              <motion.button
                className="w-full text-white bg-[#0B74FF] hover:bg-[#075ED6] py-3 px-3 rounded-lg"
                whileTap={{ scale: 0.99 }}
                whileHover={{ scale: 1.01, transition: { yoyo: Infinity } }}
              >
                Create Account
              </motion.button>
            </div>
          </form>

          {/* google sign up */}
          <motion.button
            onClick={handleGoogle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-white text-black border-[#e5e5e5] w-full mt-4"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </motion.button>
          {/*  */}
          <p className="text-center text-black mt-6">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="underline font-semibold text-indigo-500"
            >
              Login
            </Link>
          </p>
          {/*  */}
        </motion.div>
      </div>
    </>
  );
};

export default Register;
