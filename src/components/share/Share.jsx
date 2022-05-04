import "./share.css"
import {PhotoCameraBack, AlternateEmail,Mood, HighlightOff, LineAxisOutlined, SearchOffOutlined, AddToQueueTwoTone, SnoozeOutlined} from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user, dispatch} = useContext(AuthContext);
  const body = useRef();


  const [file, setFile] = useState(null);


  
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      body: body.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
       try{
        const res = await axios.post("http://127.0.0.1:5000/predict", {text:body.current.value})
        const results = JSON.stringify(res.data);
        console.log(results)
        if (results === JSON.stringify("Hate Speech")){
         
          await axios.put("users/" + user._id, {
            isSexist:true,
            userId:user._id
          })

          const helper = await axios.get("/users/helper");
          const useable = helper.data;
          await axios.put("users/"+useable._id+"/friend", {userId:user._id});
          dispatch({type:"FRIEND", payload:user._id});
        }
      
    }catch(err){
      console.log(err);
    }
    try{
        await axios.post("/posts", newPost);
        // window.location.reload();
      }catch (err) {
        console.log(err);
      }
  };

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
