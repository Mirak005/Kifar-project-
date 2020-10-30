import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import "./updateDelete.css"

const DeletePost = ({_id}) => {
  const [post,setPost] = useState([]);
  const remove=(e) =>{
    e.preventDefault()
    console.log(_id)
    fetch(`/api/posts/deletepost/${_id}`, {
      method: 'delete',
      headers: {

        'authorization': localStorage.getItem("token"),

      }
    })
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
        window.location.reload();
  })
      .catch(err => console.log("Err in deleting posts: ", err))

  };
 

  return (
    <div>
      
         <button className="delete" onClick={(e)=>remove(e) }>delete</button>

                      
            
     </div>
         )
      
  
};

export default DeletePost
