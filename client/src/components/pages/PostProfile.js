import React from 'react'
import "./Post.css"

function PostProfile({_id,
    AvatarPicture,
    title,
    title2,
    body,
    postedBy,
    timestamp,
    buttonUpdatePost,
    buttonDeletePost})
{
    
    return (
        <div className="card">
        <div  key={_id} style={{boxShadow: '3px 3px 14px 0px rgba(0,0,0,0.2)', borderRadius: 10, margin: 10, padding: 20}}>
           <nav className="additional">
                <h4>{AvatarPicture}{postedBy?.name + " " + postedBy?.lastName}</h4>
            <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
            </nav>
            <hr/>
            <h5>{title} To {title2}</h5>
            
            <p>{body}</p>
    <form className="edit-delete">{buttonUpdatePost}{buttonDeletePost}</form>
        </div>
        </div>
    )

}
export default PostProfile
