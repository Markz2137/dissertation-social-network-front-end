import "./online.css"

export default function Online({user}) {
  return (
    <li className="rightBarFriend">
            <div className="rightBarProfilePicContainer">
              <img className="rightBarProfilePic" src={user.profilePicture} alt="" />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">{user.username}</span>
          </li>
  )
}
