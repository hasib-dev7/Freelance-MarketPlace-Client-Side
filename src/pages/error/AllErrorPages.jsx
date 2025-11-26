import { Link } from "react-router";
import allErrorPageImage from "../../assets/error-404.png"

const AllErrorPages = () => {
    return (
        <>
             <div className="flex justify-center items-center h-screen bg-[#F5F5F5]">
        <div className="flex flex-col justify-center items-center md:w-11/12  lg:10/12 mx-auto px-4 md:px-3 lg:px-12   ">
          <figure className="w-52 h-52">
            <img src={allErrorPageImage} alt="error page logo icon" />
          </figure>
          <h3 className="text-[#001931] font-semibold text-xl md:text-3xl lg:text-5xl">
            Oops, page not found!
          </h3>
          <p className="text-[#627382] text-sm  lg:text-lg mt-3">
            The page you are looking for is not available.
          </p>
          <div className="flex justify-center pt-10 pb-20">
            <Link
              to="/"
              className="btn btn-ghost "
            >
              Go Back!
            </Link>
          </div>
        </div>
      </div>
        </>
    );
};

export default AllErrorPages;