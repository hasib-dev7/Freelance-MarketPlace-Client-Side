import { Outlet } from "react-router";
import Navber from "../components/navber/Navber";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col w-full md:w-11/12 lg:w-10/12 mx-auto min-h-screen ">
        <Navber></Navber>
        <div className="flex-1 px-4 md:px-6 lg:px-20 py-4 md:py-6 lg:py-8">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
