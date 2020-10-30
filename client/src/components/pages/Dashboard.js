import React , { useState} from 'react'
import { useSelector} from "react-redux";
import Feed from "./Feed";
import Search from "./Search";
const Dashboard = () => {
  const [inputvalue , setInputValue] = useState("") ;
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div >
      {/* <h1>
        {user.name} {user.lastName} : {user.email}
      </h1> */}
      
      
     
      <Feed/>
        
    </div>
  );
};

export default Dashboard;
