import "./leftBar.css";
import {ViewList, Chat, Groups} from '@mui/icons-material'
//import{Users} from "./users";
import CloseFriend from "../closeFriend/CloseFriend";

export default function LeftBar(){
    return (
        <div className="leftBar">
            <div className="leftBarWrapper">
                <ul className="leftBarList">
                    <li className="leftBarListItem">
                        <ViewList className="leftBarIcon"/>
                        <span className="leftBarListItemText"> Feed </span>
                    </li>
                    <li className="leftBarListItem">
                        <Chat className="leftBarIcon"/>
                        <span className="leftBarListItemText"> Chats </span>
                    </li>
                    <li className="leftBarListItem">
                        <Groups className="leftBarIcon"/>
                        <span className="leftBarListItemText"> Groups </span>
                    </li>
                </ul>

                <button className="leftBarButton">Show More</button>
                <hr className="leftBarHr"/>
                <ul className="leftBarFriendList">
                    {User.map(u=>(
                        <CloseFriend key ={u.id} user={u}/>
                    ))}

                </ul>

            </div>
        </div>
    )

}

