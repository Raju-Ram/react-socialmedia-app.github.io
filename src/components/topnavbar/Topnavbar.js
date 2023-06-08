import "./Topnavbar.css";
import { Person, Search, Chat, Notifications } from "@mui/icons-material";

export default function Topnavbar() {
  return (
    <div className="topnavbaarContainer">
        <div className="topnavbaarLeft">
            <span className="logo">OneClick</span>
        </div>
        <div className="topnavbaarCenter"></div>
       <div className="searchbaar">
        <Search className="searchIcon"/>
        <input placeholder="search for friend, post or video" className="searchInput"/>
       </div>

        <div className="topnavbaarRight">
            <div className="topnavbarLinks">
                <span className="topnavbarLink">Homepage</span>
                <span className="topnavbarLink">TimeLine</span>
         </div>
         <div className="topnavbarIcons">
            <div className="topnavbarIconItem">
                <Person/>
                <span className="topnavbaarIconBadge">1</span>
            </div>
            <div className="topnavbarIconItem">
                <Chat/>
                <span className="topnavbaarIconBadge">2</span>
            </div>
            <div className="topnavbarIconItem">
                <Notifications/>
                <span className="topnavbaarIconBadge">3</span>
            </div>
          <img src="/assets/persons/P1.jpg" alt="" className="topnavbarImg"/>
         </div>
        </div>

    </div>
  )
}
