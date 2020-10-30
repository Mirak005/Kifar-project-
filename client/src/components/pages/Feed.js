import React,{useState} from 'react'
import "./Feed.css"
import MessageSender from "./MessageSender"
import Post from "./Post"
import {Avatar} from "@material-ui/core"
import Search from "./Search"


export default class Feed extends React.Component {
    state = {
        posts: [],
        allpost :[] ,
        keyword :""
    }


    componentDidMount(){
        this._getPosts()
    }

    _getPosts = () => {
        fetch("/api/posts/allpost", {
            method: 'GET',
            headers: {
                authorization: localStorage.getItem("token"),
              }
        })
        .then(res => res.json())
        .then(res => {
            
            this.setState({posts: res.posts , allpost: res.posts})
        })
        .catch(err => console.log("Err in getting posts: ", err))
    }

    search =(e)=>{
        const {posts , allpost}=this.state;
        const value=e.target.value;
        this.setState({keyword:value})
        console.log(value)
        let newposts = allpost.filter(el => el.title.includes(value.toLowerCase().trim()))
        this.setState({posts:newposts})
           

    }


    render() {
        const {allpost,posts , keyword} = this.state;

        return (
            <div className="feed">
            <br/>
                <Search keyword={keyword} search={this.search} />

                <MessageSender />

                {posts.map(({_id, title,title2, body, postedBy,timestamp}) => (
                    <Post
                        AvatarPicture = { <Avatar />}
                        key={_id}
                        title={title}
                        title2={title2}
                        body={body}
                        postedBy={postedBy}
                        timestamp="1601493943737"
                    />
                ))}
            </div>
        )
    }
}

// import React,{useState ,useEffect,useContext} from 'react'
// import "./Feed.css"
// import MessageSender from "./MessageSender"
// import Post from "./Post"

// import Search from "./Search"
// const Feed = ()=>{
//    const [inputvalue , setInputValue] = useState("") ;
//    const [posts , setPosts] = useState ([]) ;
   
 
//    useEffect (() =>
//           {
//             fetch("/api/posts/allpost", {
//                 method: 'GET',
//                 headers: {
//                     authorization: localStorage.getItem("token"),
//                   }
//             })
//             .then(res => res.json())
//             .then(res => {
//                 setPosts({posts: res.posts})
//             })
//             .catch(err => console.log("Err in getting posts: ", err))
      
//         },[])
//     //      const   search =(e)=>{
       
      
//     //     let newposts = posts.filter(el => el.title.includes(inputvalue.toLowerCase().trim()))
//     //     setInputValue({posts:newposts})
           

//     // }

// return(
//                 <div className="feed">
//                 {<Search inputvalue={inputvalue}  />}
//                  {
//                 <MessageSender />
//             }
            
//                 {posts.filter(el => el.title.includes(inputvalue.toLowerCase().trim()))
//                 .map(({_id, title,title2, body, postedBy,timestamp}) => {
//                     return(
//                     <div>
//                     <Post
//                         key={_id}
//                         title={title}
//                         title2={title2}
//                         body={body}
//                         postedBy={postedBy}
//                         timestamp="1601493943737"
//                     />
//                     </div>
//                     )
//                 })}
//             </div>
// )


// }




// export default Feed