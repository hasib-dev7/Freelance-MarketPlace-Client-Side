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
        element: <AddJob></AddJob>,
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
        element: <MyAddedJobs></MyAddedJobs>,
      },
      {
        path: "update-job",
        element: <UpdateJob></UpdateJob>,
      },
      {
        path: "my-accepted-task",
        element: <MyAcceptedTasks></MyAcceptedTasks>,
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
