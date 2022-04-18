import NavigationBar from "../../components/navigationBar/NavigationBar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import Feed from "../../components/feed/Feed";
import "./home.css"


export default function Home() {
  return (
    <>
<NavigationBar/>
<div className="homeContainer">
  <LeftBar/>
  <Feed/>
  <RightBar/>
</div>
</>
  );
}
