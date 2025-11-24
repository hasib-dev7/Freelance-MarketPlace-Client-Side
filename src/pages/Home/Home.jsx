import { use } from "react";
import { AuthContext } from "../../context/AuthContex";



const Home = () => {
  const {name}=use(AuthContext)
  console.log(name)
    return (
        <>
          <h1 className="text-5xl text-danger">Home pages</h1>  
       
        </>
    );
};

export default Home;