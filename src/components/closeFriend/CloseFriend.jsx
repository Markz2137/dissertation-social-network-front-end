import "./closeFriend.css"
//import{Users} from "./users";


export default function CloseFriend(user) {
  return (
    <li className="leftBarFriend">
                        <img className="leftBarFriendImage" src={user.profilePicture} alt = ""/>
                        <span className="leftBarFriendName">{user.username}</span>

                    </li>
  )
}
