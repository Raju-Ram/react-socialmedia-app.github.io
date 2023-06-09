import { Bookmark, Group, HelpOutline, PlayCircleFilledOutlined, School, WorkOutline,Event, RssFeed } from "@mui/icons-material"
import "./Sidebar.css"
import {Users, onlineUsers} from "../../dummyData"
import Closefriend from "../closefriend/Closefriend";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebaarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">School</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Help</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Event</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Work</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Group</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">  
                     <button className="sidebarbutton">Show More</button>
                    </li>
                </ul>
             
                <hr className="sidebarHr"/>
           <div className="sidebarfriendlistContainer">

                <ul className="sidebarfriendlist">
                   {Users.map((u) => (
                   <Closefriend key={u.id} user={u}/>
                  ))}
                </ul>
           </div>
            </div>
        </div>
    );
}
