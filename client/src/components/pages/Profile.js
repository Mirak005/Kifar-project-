import React  from 'react'
import FeedProfile from "./FeedProfile";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { Button } from "reactstrap";


function Profile() {
    const user = useSelector((state) => state.authReducer.user);
    return (
        <div>
            <h3>my Profile</h3>
          <Button color="light">
          <Link to="/propos" >
          A propos 
             
          </Link>
          </Button>

          {user.name} {user.lastName}
            <FeedProfile/>
        
                
        </div>
    )
}

export default Profile
