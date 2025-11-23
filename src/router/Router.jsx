import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddJob from "../pages/addJob/AddJob";
import AllJob from "../pages/allJob/AllJob";
import AllJobDetails from "../pages/allJobDetails/AllJobDetails";
import MyAcceptedTasks from "../pages/myAcceptedTasks/MyAcceptedTasks";
import MyAddedJobs from "../pages/myAddedJobs/MyAddedJobs";
import UpdateJob from "../pages/updateJob/UpdateJob";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "add-job",
        element: <PrivateRouter>
          <AddJob></AddJob>
        </PrivateRouter>,
      },
      {
        path: "all-job",
        element: <AllJob></AllJob>,
      },
      {
        path: "job-details",
        element: <AllJobDetails></AllJobDetails>,
      },
      {
        path: "my-added-jobs",
        element: <PrivateRouter>
          <MyAddedJobs></MyAddedJobs>
        </PrivateRouter>,
      },
      {
        path: "update-job",
        element: <UpdateJob></UpdateJob>,
      },
      {
        path: "my-accepted-task",
        element: <PrivateRouter>
          <MyAcceptedTasks></MyAcceptedTasks>
        </PrivateRouter>,
      },
      //   Authentication pages
      {
        path: "auth/login",
        element: <Login></Login>,
      },
      {
        path: "auth/register",
        element: <Register></Register>,
      },
      
    ],
  },
]);

export default router;
