import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./rightBar.css";
import {PersonAdd, PersonRemove} from "@mui/icons-material";



export default function RightBar({user}) {

  const { user: currentUser, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friendsList, setFriendsList] = useState([])
  const [friend, setFriend] = useState(currentUser.friends.includes(user?._id))


  useEffect(()=>{
    setFriend(currentUser.friends.includes(user?._id))
  },[currentUser, user]);

  useEffect(() => {
    const getFriends = async ()=>{
      try{
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriendsList(friendList.data);
      }catch(err){
        console.log(err)
      }
    };
    getFriends();
  },  [user]);

  const friendHandler = async() =>{
    try{
      if(friend){
        await axios.put("/users/"+user._id+"/unfriend", {userId:currentUser._id});
        dispatch({type:"UNFRIEND", payload:user._id})
      }else{
        await axios.put("/users/"+user._id+"/friend", {userId:currentUser._id});
        dispatch({type:"FRIEND", payload:user._id})
      }
    }catch(err){
      console.log(err);
    }
    setFriend(!friend)
  }
  
  const HomeRightBar = () => {
    return(
      <>
          <h4 className="rightBarTitle">Online Friends</h4>

      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
      {user.username !== currentUser.username && (
        <button className="rightBarAddFriendButton" onClick={friendHandler}>
      <i className="personAddIcon"> {friend ? <PersonRemove/> : <PersonAdd/>}</i>
       {friend ? "Remove Friend" : "Add Friend"}
       
        </button>
      )}
        <h4 className="rightBarTitle"> User Friends</h4>
        <div className="rightBarProfileFriends">
          {friendsList.map((friend) => (
             <div className="rightBarProfileFriend">
              <Link to={"/profile/"+friend.username}>
             <img src={friend.profilePic ? PF + friend.profilePic : PF + "no-user-image-icon.png"} alt="" className="rightBarProfileFriendImg" />
             </Link>
             <span className="rightBarProfileFriendName">{friend.username}</span>
           </div>
          ))}
         
        </div>

      </>
    )
  }
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}
