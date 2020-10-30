import React from 'react'
import "./Feed.css"
import MessageSender from "./MessageSender"
import UpdatePost from './UpdatePost'
import DeletePost from './DeletePost'
import PostProfile from './PostProfile'
import {Avatar} from "@material-ui/core"

export default class Feed extends React.Component {
    state = {
        mypost: [] // !!!!!!!!!!!!!!!!!
    }

    componentDidMount(){
        this._getPosts()
    }

    _getPosts = () => {
        fetch("/api/posts/mypost", {
            method: 'GET',
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
        .then(res => res.json())
        .then(res => {
            this.setState({mypost: res.mypost})
        })
        .catch(err => console.log("Err in getting posts: ", err))
    }

    render() {
        const {mypost} = this.state;

        return (
            <div className="feed">
                <MessageSender />

                {mypost.map(({_id, title,title2,body, postedBy,timestamp,AvatarPicture}) => (
                    <div className="">
                    <PostProfile

                        AvatarPicture = { <Avatar />}
                        postedBy={postedBy}
                        timestamp="1601493943737"

                        key={_id}
                        title={title}
                        title2={title2}
                        body={body}
                        buttonUpdatePost={<UpdatePost _id={_id}/> }
                        buttonDeletePost={<DeletePost _id={_id}/>}
                    /> 
                    </div> 
                    
                ))}
                
            </div>
        )
    }
}

