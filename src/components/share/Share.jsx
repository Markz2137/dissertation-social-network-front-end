import "./share.css"
import {PhotoCameraBack, AlternateEmail,Mood, HighlightOff, LineAxisOutlined, SearchOffOutlined} from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user} = useContext(AuthContext);
  const body = useRef();


  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      body: body.current.value

    }
    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);

      newPost.img = fileName;

      try{
        await axios.post("/upload", data);

        window.location.reload();
      }catch(err){
        console.log(err);
      }
    }

    try{
        await axios.post("/posts", newPost)
    }catch{

    }
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfilePic" src={user.profilePic ? PF + user.profilePic : PF + "no-user-image-icon.png" } alt=""/>
          <input placeholder={"What Would You Like To Share " + user.username + "?"} className="shareInput" ref = {body}/>
          
        </div>
        <hr className="shareHr"/>
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <HighlightOff className="cancelImg" onClick={()=>setFile(null)}/>
          </div>
        )}
          <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <PhotoCameraBack htmlColor = "DarkSlateBlue" className="shareIcon"/>
                <span className="shareOptionText">Photo or Video</span>
               <input style={{display:"none"}} type = "file" id="file" accept = ".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])}/>
              </label>
              <div className="shareOption">
                <AlternateEmail htmlColor = "ForestGreen" className="shareIcon"/>
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <Mood className="shareIcon"/>
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <button className="shareButton" type="submit"> Share </button>
          </form>
      </div>
    </div>
  )
}
