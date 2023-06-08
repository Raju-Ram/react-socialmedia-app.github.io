import { Bookmark, Group, HelpOutline, PlayCircleFilledOutlined, School, WorkOutline,Event, RssFeed } from "@mui/icons-material"
import "./Sidebar.css"

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
                     <button className="sidebarbutton">Shoe More</button>
                    </li>
                </ul>
             
                <hr className="sidebarHr"/>
           <div className="sidebarfriendlistContainer">

                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">kumawatraj</span>
                    </li>
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">radheyshyam saini</span>
                    </li>
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">mahendra kumawat</span>
                    </li>
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">lalit kumawat</span>
                    </li>
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">ratan yadav</span>
                    </li>
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">subhash kumawat</span>
                    </li>
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">sunil choudhary</span>
                    </li>
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">mahesh piploda</span>
                    </li>
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">krishan yadav</span>
                    </li>
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">ashok yadav</span>
                    </li>
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">rajesh kumawat</span>
                    </li>
                    <li className="sidebarfriend">
                     <img src="/assets/persons/P2.jpg" alt=""  className="sidebarfriendimg"/>
                    <span className="sidebarfriendname">pardeeeo kumawat</span>
                    </li>
                </ul>
           </div>
            </div>
        </div>
    );
}
