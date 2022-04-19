import NavigationBar from "../../components/navigationBar/NavigationBar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import Feed from "../../components/feed/Feed";
import "./profile.css"

export default function Profile() {
    return (
        <>
            <NavigationBar />
            <div className="profile">
                <LeftBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img className = "profileCoverImg" src="" alt="" />
                        <img src="filler" alt="" className="profilePicImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">ssd</h4>
                            <span className="profileDesc"></span>
                        </div>
                    </div>
                    <div className="profileRightBottom"></div>
                    <Feed />
                    <RightBar  profile/>
                </div>

            </div>
        </>
    );
}
