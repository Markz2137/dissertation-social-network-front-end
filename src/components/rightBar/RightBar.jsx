import "./rightBar.css"

export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendsList">
          <li className="rightBarFriend">
            <div className="rightBarProfilePicContainer">
              <img className="rightBarProfilePic" src="" alt="" />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">PlaceHolder</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
