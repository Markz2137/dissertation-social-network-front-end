import "./chatMessage.css"
import dayjs from "dayjs";

export default function ChatMessage({message,currentUser}) {
  var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={currentUser ? "chatMessage currentUser" : "chatMessage"}>
        <div className="chatMessageTop">
            <img className="chatMessageImg" src= {PF + "no-user-image-icon.png"} alt=""/>
            <p className="chatMessageText">{message.content}</p>
        </div>
        <div className="chatMessageBottom">{dayjs(message.createdAt).fromNow()}</div>
    </div>
  )
}
