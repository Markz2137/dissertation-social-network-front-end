import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import ChatMessage from "../../components/chatMessage/ChatMessage";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import Conversation from "../../components/conversations/Conversation";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import { AuthContext } from "../../context/AuthContext";
import "./messenger.css";
import axios from "axios";
import { useRef } from "react";
import {io} from "socket.io-client";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const socket = useRef();
  const [arriveMessage, setArriveMessage] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const [newMessage, setNewMessage] = useState("");
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

useEffect(()=>{
  socket.current = io.connect("ws://localhost:8900");
  socket.current.on("getMessage", (data) =>{
    setArriveMessage({
      sender: data.senderId,
      content: data.content,
      createdAt: Date.now(),
    });
  });

},[]);

useEffect(()=>{
  arriveMessage && 
  currentChat?.involved.includes(arriveMessage.sender) &&
  setMessages((prev) => [...prev, arriveMessage])
},[arriveMessage, currentChat]);

useEffect(()=>{
    socket.current.emit("sendUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(user.friends.filter((f) => users.some((u) => u.userId === f))
      )
    });
}, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user]);

  useEffect(()=> {
    const getMessages = async () => {
      try{
      const res = await axios.get("/messages/" + currentChat?._id)
      setMessages(res.data);
      }catch(err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSend = async (e) =>{
    e.preventDefault();
    const message = {
      sender: user._id,
      content: newMessage,
      conversationId: currentChat._id
    };
    
    const receiverId = currentChat.involved.find((member) => member !== user._id);

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      content: newMessage,
    });
    try{
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    }catch(err){
      console.log(err);
    }

  };


  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <>
      <NavigationBar />
      <div className="messenger">
        <div className="chat">
          <div className="chatWrapper">
            <input placeholder="Search for friends" className="chatWrapInput" />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <ChatMessage
                        message= {m} currentUser={m.sender === user._id}
                      />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    placeholder="Message..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    className="messageInput"
                  ></textarea>
                  <button className="messageSubmitButton" onClick={handleSend}>Send</button>
                </div>
              </>
            ) : (
              <span className="noConvoText">
                {" "}
                Click A Coversation To Start Chatting
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline onlineUsers={onlineUsers} currentId={user._id} setCurrentChat={setCurrentChat}/>
          </div>
        </div>
      </div>
    </>
  );
}