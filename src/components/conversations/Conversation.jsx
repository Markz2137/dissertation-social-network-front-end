import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import "./conversation.css"

export default function Conversation({conversation, currentUser}) {
const [user, setUser] = useState(null);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

useEffect(() => {
  const friendId = conversation.involved.find((i) => i !== currentUser._id);

  const getUser = async () =>{
    try{
    const res = await axios("/users?userId=" + friendId);
    setUser(res.data);
    }catch(err){
      console.log(err);
    }
  };
  getUser()
}, [currentUser, conversation])

  return (
    <div className="conversation">
        <img src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "no-user-image-icon.png"
        } alt="" className="conversationImg" />
        <span className="conversationText">{user?.username}</span>
    </div>
  );
}
