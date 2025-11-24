/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import LoginAnimation from "./LoginAnimation";
import { use, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContex";
const Login = () => {
  const [toggle, setToggle] = useState(false);
  const emailRef = useRef();
  const loaction = useLocation();
  const navigate = useNavigate();
  const message = " Login now!";
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

  // console.log(loaction);

  const { signInUser, setUser, googleSignIn, resetPassword } = use(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    // get form values
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await signInUser(email, password);
      const loginUser = res.user;
      setUser(loginUser);
      const userName = res.user.displayName || "User"; // fallback
      toast.success(`Welcome back, ${userName}! 🎉`, {});
      // path location to navigate
      navigate(loaction.state || "/");
    } catch (err) {
      // console.log("Login error:", err);
      // Customize error messages if needed
      if (err.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else if (err.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Please enter a valid email address.");
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };
  // google login
  const handleGoogle = () => {
    googleSignIn().then((res) => {
      
      setUser(res.user);
      const userName = res.user.displayName || "User"; // fallback
      toast.success(`Welcome back, ${userName}! 🎉`, {});
      // path location to navigate
      navigate(loaction.state || "/");
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
          <LoginAnimation></LoginAnimation>
        </div>
        {/* register from */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          className=" w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/40 "
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
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
          <form onSubmit={handleLogin} className="space-y-4">
            {/* eamail address */}
            <label className="label"> Email </label>
            <input
              type="email"
              name="email"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none transition focus:border-indigo-400"
              placeholder="Enter Your Email"
            />

            {/* password */}
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
            <div>
              <a className="link link-hover ">Forgot password?</a>
            </div>
            <motion.button
              className="w-full text-white bg-indigo-500 py-3 px-3 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
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
              to="/auth/register"
              className="underline font-semibold text-indigo-500"
            >
              Register
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
