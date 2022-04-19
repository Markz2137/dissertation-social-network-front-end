import "./rightBar.css";
//import{Users} from "./users";
import Online from "../online/Online";
export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendsList">
          {Users.map(u=>(
            <Online key ={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
