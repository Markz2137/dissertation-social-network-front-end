import NavigationBar from "../../components/navigationBar/NavigationBar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import Feed from "../../components/feed/Feed";
import "./profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const  username = useParams().username;

    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(`/users?username=${username}`);
        setUser(res.data);
      };

      fetchUser();
    }, [username]);
    return (
      <>
        <NavigationBar />
        <div className="profile">
          <LeftBar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img className="profileCoverImg" src={user.coverPic ? PF + user.coverPic : PF+"life-cycle-facebook-cover.jpg"} alt="" />
                <img className = "profilePicImg" src={user.profilePic ? PF + user.profilePic : PF+"no-user-image-icon.png"} alt=""  />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileDesc">{user.desc}</span>
              </div>
            </div>
            <div className="profileRightBottom">
            <Feed username={username} />
            <RightBar user={user} />
            </div>
          </div>
        </div>
      </>
    );
}
