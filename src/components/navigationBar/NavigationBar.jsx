import "./navigationBar.css";
import { Search, AccountCircle, Message, CircleNotifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export default function NavigationBar() {

const {user} = useContext(AuthContext);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const logout = () => {
  localStorage.clear()
  window.location.reload();
}
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
        <Link to ="/" style={{textDecoration:"none", color: 'white'}}>
          <span className="navigationBarLinks">Homepage</span>
          </Link>
          <button className="logoutButton" onClick={logout}>LogOut</button>
        </div>
        <div className="navigationBarIcons">
          <div className="navigationBarIconItem">
            <Link to="/messenger" style={{ textDecoration: 'none',color: 'white' }}>
            <Message />
            </Link>
            <span className="navigationBarIcon">2</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePic ? PF + user.profilePic : PF + "no-user-image-icon.png"} alt="" className="navigationBarImage" />
        </Link>
      </div>
    </div>
  )
}
