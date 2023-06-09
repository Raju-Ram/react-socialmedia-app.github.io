import "./Rightbar.css";
import { onlineUsers } from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar({ Profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdaycontainer">
          <img className="birthdayimg" src="/assets/post/giff1.png" alt="" />
          <span className="birthdaytext">
            <b>Polo Foster</b><b>3 other friends</b><b>have a birthday today</b>
          </span>
        </div>
        <hr />
        <img className="rightbarad" src="/assets/post/add4.png" alt="" />
        <hr />
        <div className="onlineFriendContainer">

          <h4 className="rightbartital">Online friends</h4>
          <div className="rightbaarfriendlist">

            {onlineUsers.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </div>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      <hr></hr>
      <h4 className="rightbartital">User Information </h4>
      <div className="rightbarinfo">
        <div className="rightbarinfoitem">
          <span className="rightbarinfokey">City:</span>
          <span className="rightbarinfovalue">Jaipur:</span>
        </div>
        <div className="ribarinfoitem">
          <span className="rightbarinfokey">From:</span>
          <span className="rightbarinfovalue">Jhotwara:</span>
        </div>
        <div className="ribarinfoitem">
          <span className="rightbarinfokey">Relationship:</span>
          <span className="rightbarinfovalue">Single:</span>
        </div>
      </div> <hr></hr>
      <h4 className="rightbartital">User Friends </h4>
     <div className="rightbarfollowings">
      
      <div className="rightbarfollowing">
        <img src="/assets/persons/P1.jpg" alt="" className="rightbaefollowingimg"/>
        <span className="rightbarfollowingname">Raju kumawat</span>
      </div>
      <div className="rightbarfollowing">
        <img src="/assets/persons/P1.jpg" alt="" className="rightbaefollowingimg"/>
        <span className="rightbarfollowingname">Raju kumawat</span>
      </div>
      <div className="rightbarfollowing">
        <img src="/assets/persons/P1.jpg" alt="" className="rightbaefollowingimg"/>
        <span className="rightbarfollowingname">Raju kumawat</span>
      </div>
     </div>

      </>
    )
  }
  return (
    <div className="rightbox">
      <div className="tightbarwrapper">

{Profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
