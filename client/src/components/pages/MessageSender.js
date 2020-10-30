import React, { useState } from 'react'
import "./MessageSender.css"
import {Avatar} from "@material-ui/core"

const MessageSender = () => {
    const [title, setTitle] = useState("");
    const [title2, setTitle2] = useState("");
    const [body, setBody] = useState("");

    function post(e){
        fetch("/api/posts/createpost", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'authorization': localStorage.getItem("token"),
            },
            body: JSON.stringify({
                title,
                title2,
                body,
                postedBy: localStorage.getItem("_id")
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log('res', res)
        })
        .catch(err => console.log("Err in getting posts: ", err))
    }

    return (
        <div style={{ boxShadow: '3px 3px 14px 0px rgba(0,0,0,0.2)', borderRadius: 10, margin: 10, padding: 20 }}>
           
            <form>
                <nav className="input-Sender">
                <Avatar />
                <input type="text" name="title" placeholder="Starting place" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="text" name="title2" placeholder="Arrival Area" value={title2} onChange={e => setTitle2(e.target.value)} />
                </nav>
                <textarea name="body" rows="5" placeholder="your information" value={body} onChange={e => setBody(e.target.value)}></textarea>
                <button onClick={(e) => post(e)}>Post</button>
            </form>
        </div>
    )
}

export default MessageSender

