import React, { useContext, useEffect, useState } from "react";

import "./post.css";
import {MoreHoriz, FavoriteBorder} from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import { AuthContext } from "../../context/AuthContext";


export default function Post({post}) {
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const {user:currentUser} = useContext(AuthContext)

    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])

    const [like,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)

    const [user,setUser] = useState({});

    useEffect(() =>{
        const fetchUser = async () =>{
          
        const res = await axios.get(`/users?userId=${post.userId}`);
        setUser(res.data);
      
        };
      
        fetchUser();

    }, [post.userId]);

    const likeHandler =()=>{

        try{
            axios.put("/posts/"+post._id+"/like", {userId:currentUser._id})
        }
        catch(err){}
        setLike(isLiked ? like -1 : like +1)
        setIsLiked(!isLiked)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfilePic" src= {user.profilePic ? PF + user.profilePic : PF + "no-user-image-icon.png"} alt=""/>
                    <Link to={`profile/${user.username}`}>
                    <span className="postUsername">{user.username}</span>
                    </Link>
                    <span className="postDate">{dayjs(post.createdAt).fromNow()}</span> 

                </div>
                <div className="postTopRight">
                    <MoreHoriz/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post?.body}
                </span>
                <img className ="postImg" src={post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <FavoriteBorder className="postLikeIcon" onClick ={likeHandler}/>
                    <span className="postLikeCounter">{like} people like this</span>

                </div>
                <div className="postBottomRight"></div>
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
    </div>
  )
}
