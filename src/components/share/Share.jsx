import "./share.css"
import {PhotoCameraBack, AlternateEmail,Mood} from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfilePic" src="http://placehold.it/" alt=""/>
          <input placeholder="What Would You Like To Share?..." className="shareInput" />
        </div>
        <hr className="shareHr"/>
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PhotoCameraBack htmlColor = "DarkSlateBlue" className="shareIcon"/>
                <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                <AlternateEmail htmlColor = "ForestGreen" className="shareIcon"/>
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <Mood className="shareIcon"/>
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <button className="shareButton"> Share </button>
          </div>
      </div>
    </div>
  )
}
