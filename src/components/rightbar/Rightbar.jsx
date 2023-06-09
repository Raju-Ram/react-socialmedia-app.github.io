import "./Rightbar.css";
import {onlineUsers} from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbox">
      <div className="tightbarwrapper">
        <div className="birthdaycontainer">
          <img className="birthdayimg" src="/assets/post/giff1.png" alt=""/>
          <span className="birthdaytext">
            <b>Polo Foster</b><b>3 other friends</b><b>have a birthday today</b>
          </span>
        </div>
        <hr />
        <img className="rightbarad" src="/assets/post/add4.png" alt=""/>
        <hr />
        <div className="onlineFriendContainer">

        <h4 className="rightbartital">Online friends</h4>
        <div className="rightbaarfriendlist">
       
         {onlineUsers.map((u) => (
           <Online key={u.id} user={u}/>
           ))}
        </div>
           </div>
      </div>
      
      </div>
  )
}
