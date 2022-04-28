import "./navigationBar.css";
import { Search, AccountCircle, Message, CircleNotifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export default function NavigationBar() {

const {user} = useContext(AuthContext);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="navigationBarContainer">
      <div className="navigationBarLeft">

        <Link to ="/" style={{textDecoration:"none"}}>
        <span className="logo">SafeBook</span>
        </Link>
      </div>

      <div className="navigationBarCenter">
        <div className="searchBar">
          <Search />
          <input placeholder="Search for a user or post " className="searchInput" />

        </div>
      </div>


      <div className="navigationBarRight">
        <div className="navigationBarLinks">
          <span className="navigationBarLinks">Homepage</span>
          <span className="navigationBarLinks">For You</span>
        </div>
        <div className="navigationBarIcons">
          <div className="navigationBarIconItem">
            <AccountCircle />
            <span className="navigationBarIcon">1</span>
          </div>
          <div className="navigationBarIconItem">
            <Message />
            <span className="navigationBarIcon">2</span>
          </div>
          <div className="navigationBarIconItem">
            <CircleNotifications />
            <span className="navigationBarIcon">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePic ? PF + user.profilePic : PF + "no-user-image-icon.png"} alt="" className="navigationBarImage" />
        </Link>
      </div>
    </div>
  )
}
