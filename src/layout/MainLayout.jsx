import { Outlet } from "react-router";
import Navber from "../components/navber/Navber";
import Footer from "../components/footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";
const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col w-full md:w-11/12 lg:w-10/12 mx-auto min-h-screen ">
        <Navber></Navber>
        <div className="flex-1 px-4 md:px-6 lg:px-20 ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
       <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
    </>
  );
};

export default MainLayout;
