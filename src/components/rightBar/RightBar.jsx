import "./rightBar.css";
//import{Users} from "./users";
import Online from "../online/Online";
export default function RightBar(profile) {
  constHomeRightBar = () => {
    return(
      <>
          <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendsList">
          {Users.map(u=>(
            <Online key ={u.id} user={u}/>
          ))}
        </ul>

      </>
    );
  };

  const ProfileRightBar = () =>{
    return(
      <>
      <h4 className="rightBarTitle"> User Friends</h4>
      <div className="rightBarProfileFriends">
        <div className="rightBarProfileFriend">
          <img src="filler" alt="" className="rightBarProfileFriendImg" />
          <span className="rightBarProfileFriendName">filler</span>
        </div>
      </div>
     
      </>
    )
  }
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <ProfileRightBar/>
      </div>
    </div>
  )
}
