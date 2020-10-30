import React, { useState } from "react";
import "./Post.css";
import { Link, useHistory } from "react-router-dom";
import ProposUser from "./ProposUser.js";
import { Result } from "express-validator";

function Post({ title, title2, body, postedBy, timestamp, AvatarPicture }) {
  const history = useHistory();
  const [abouts, setAbouts] = useState([]);

//   const about = (e) => {
//     e.preventDefault();
//     fetch(`/api/abouts/aboutuser/${postedBy._id}`, {
//       method: "GET",
//       headers: {},
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setAbouts(res);
//         console.log(res);
//       })
//       .catch((err) => console.log("Err in getting posts: ", err));

//     history.push("/proposuser");
//   };

  return (
    <div className="card">
      <div
        style={{
          boxShadow: "3px 3px 14px 0px rgba(0,0,0,0.2)",
          borderRadius: 10,
          margin: 10,
          padding: 20,
        }}
      >
        <h4>
          {AvatarPicture}
          <Link to={`/proposuser/${postedBy._id}`}>
            {" "}
            {postedBy?.name + " " + postedBy?.lastName}
          </Link>
        </h4>
        <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
        <hr />
        <h5>
          {title} To {title2}
        </h5>
        <p>{body}</p>
      </div>

      {abouts.map(({ _id, name, lastName, age, email, mobile, address }) => (
        <div className="ProposUser ">
          <ProposUser
            key={_id}
            name={name}
            lastName={lastName}
            age={age}
            email={email}
            mobile={mobile}
            address={address}
          />
        </div>
      ))}
    </div>
  );
}

export default Post;
