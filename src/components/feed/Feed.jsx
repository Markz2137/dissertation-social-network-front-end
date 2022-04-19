import "./feed.css"
import Share from "../share/Share";
import Post from "../post/Post";
import { PostAddSharp } from "@mui/icons-material";

//import {Posts} from "../../../../.."

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {PostAddSharp.map(p=>(
          <Post key = {p.id} post={p}/>
        ))}
        
      </div>
    </div>
  )
}
