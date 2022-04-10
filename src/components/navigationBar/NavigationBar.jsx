import "./navigationBar.css";
import { Search, AccountCircle, Message, CircleNotifications } from "@mui/icons-material";
export default function NavigationBar() {
  return (
    <div className="navigationBarContainer">
      <div className="navigationBarLeft">
        <span className="logo">SafeBook</span>
      </div>


      <div className="navigationBarCentre">
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
            <span className="NavigationBarIcon">1</span>
          </div>
          <div className="navigationBarIconItem">
            <Message />
            <span className="NavigationBarIcon">2</span>
          </div>
          <div className="navigationBarIconItem">
            <CircleNotifications />
            <span className="navigationBarIcon">1</span>
          </div>
        </div>
        <img src="" alt="" className="notificationBarImage" />
      </div>
    </div>
  )
}
