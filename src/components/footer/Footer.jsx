import { Briefcase } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#0B1726] text-gray-200">
        <div className="w-full md:w-11/12 lg:w-10/12 mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT: Logo + description + social */}
          <div>
            <div className="flex items-center gap-3">
               <p className="bg-[#0B74FF] h-18 w-18 flex justify-center items-center rounded-full">
              <Briefcase size={40} color="#ffffff" strokeWidth={1.5} />
            </p>
              <h3 className="text-2xl font-semibold text-white">JobHub</h3>
            </div>

            <p className="mt-4 text-gray-300 max-w-sm leading-relaxed">
              The most reliable marketplace connecting talented professionals
              with businesses worldwide. Find the perfect job or hire top talent
              today.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="p-2 rounded-md bg-white/6 hover:bg-white/10 transition"
                aria-label="facebook"
              >
                <FaFacebookF  className="w-4 h-4 text-white" />
               
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-white/6 hover:bg-white/10 transition"
                aria-label="twitter"
              >
                <FaXTwitter className="w-4 h-4 text-white" />
                
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-white/6 hover:bg-white/10 transition"
                aria-label="linkedin"
              >
                <FaLinkedinIn className="w-4 h-4 text-white"/>
               
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-white/6 hover:bg-white/10 transition"
                aria-label="instagram"
              >
                <FaInstagram  className="w-4 h-4 text-white"/>
                
              </a>
            </div>
          </div>

          {/* MIDDLE: Quick Links */}
          <div className="md:pl-6">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a className="hover:text-[#0B74FF] transition" href="/all-jobs">
                  All Jobs
                </a>
              </li>
              <li>
                <a className="hover:text-[#0B74FF] transition" href="/post-job">
                  Add a Job
                </a>
              </li>
              <li>
                <a className="hover:text-[#0B74FF] transition" href="/my-tasks">
                  My Tasks
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#0B74FF] transition"
                  href="/categories"
                >
                  Categories
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT: Support */}
          <div className="md:pl-6">
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a className="hover:text-[#0B74FF] transition" href="/help">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-[#0B74FF] transition" href="/contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-[#0B74FF] transition" href="/privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-[#0B74FF] transition" href="/terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/6"></div>

        {/* Bottom area */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} JobHub. All rights reserved. Built with
            passion for connecting talent worldwide.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#abut"
              className="text-sm px-3 py-2 rounded-md border border-white/6 hover:bg-white/6 transition text-gray-300"
            >
              Trust & Safety
            </a>
            <Link to={'/add-job'}
              href="/post-job"
              className="text-sm px-3 py-2 rounded-md bg-[#0B74FF] hover:bg-[#095fd6] text-white transition"
            >
              Create a Job
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
