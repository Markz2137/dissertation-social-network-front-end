import "./rightBar.css";



export default function RightBar({user}) {
  
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
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}
