import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import "./chatonline.css"

export default function ChatOnline({onlineUsers, currentId, setCurrentChat}) {

const[friends, setFriends] = useState([]);
const[onlineFriends, setOnlineFriends] = useState([]);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
useEffect(()=>{
  const getFriends = async () => {
    const res = await axios.get("/users/friends/" + currentId);
    setFriends(res.data);
  };
  getFriends();
},[currentId]);

useEffect(()=>{
  setOnlineFriends(friends.filter((f) =>onlineUsers.includes(f._id)));
},[friends,onlineUsers]);

const handleClick = async (user) => {
  try {
    const res = await axios.get(
      `/conversations/find/${currentId}/${user._id}`
    );
    setCurrentChat(res.data);
  } catch (err) {
    console.log(err);
  }
};

return (
  <div className="chatOnline">
    {onlineFriends.map((o) => (
      <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
        <div className="chatOnlineProfilePiccContainer">
          <img
            className="chatOnlineProfilePic"
            src={
              o?.profilePicture
                ? PF + o?.profilePicture
                : PF + "no-user-image-icon.png"
            }
            alt=""
          />
          <div className="chatOnlineIcon"></div>
        </div>
        <span className="chatOnlineName">{o?.username}</span>
      </div>
    ))}
  </div>
);
}
