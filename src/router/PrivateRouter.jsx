import { use } from "react";
import { AuthContext } from "../context/AuthContex";
import { Navigate, useLocation } from "react-router";
const PrivateRouter = ({children}) => {
   const { user, authLoading } = use(AuthContext);
  const loaction=useLocation()
//   console.log(loaction)
  if (authLoading) {
    return <p>Loading ....</p>
  }
  if (user) {
    return children;
  }
  return <Navigate state={loaction.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRouter;