import "./post.css"
import {MoreHoriz, FavoriteBorder, Notes} from "@mui/icons-material"


export default function post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfilePic" src="http://placehold.it/" alt=""/>
                    <span className="postUsername">Name PlaceHolder</span>
                    <span className="postDate">5 mins ago</span>

                </div>
                <div className="postTopRight">
                    <MoreHoriz/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    Hey! first Post
                </span>
                <img className ="postImg" src="" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <FavoriteBorder className="postLikeIcon"/>
                    <span className="postLikeCounter">32 people like this</span>

                </div>
                <div className="postBottomRight"></div>
                <span className="postCommentText">20 comments</span>
            </div>
        </div>
    </div>
  )
}
