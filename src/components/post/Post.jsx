import React, { useEffect, useState } from "react";

import "./post.css"
import {MoreHoriz, FavoriteBorder, Notes} from "@mui/icons-material";

////////////////////////////////import {Users} from


export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like -1 : like +1)
        setIsLiked(!isLiked)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfilePic" src= {Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt=""/>
                    <span className="postUsername">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>

                </div>
                <div className="postTopRight">
                    <MoreHoriz/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post?.body}
                </span>
                <img className ="postImg" src={post.photo} alt="" />
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
