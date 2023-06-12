import "./Topnavbar.css";
import { Person, Search, Chat, Notifications } from "@mui/icons-material";
import {Link} from "react-router-dom"
export default function Topnavbar() {
  return (
    <div className="topnavbaarContainer">
        <div className="topnavbaarLeft">
            <Link to="/" style={{textDecoration: 'none'}}>
            <span className="logo">OneClick</span>
            </Link>
        </div>
        <div className="topnavbaarCenter"></div>
       <div className="searchbaar">
        <Search className="searchIcon"/>
        <input placeholder="search for friend, post or video" className="searchInput"/>
       </div>

        <div className="topnavbaarRight">
            <div className="topnavbarLinks">
            <Link to="/login" style={{textDecoration: 'none',color:'white'}}>
              <span className="topnavbarLink">Homepage</span>
                </Link>

                <Link to="/register" style={{textDecoration: 'none',color:'white'}}>
                 <span className="topnavbarLink">TimeLine</span>
                </Link>
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
