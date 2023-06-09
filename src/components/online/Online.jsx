import "./Online.css"

export default function Online({user}) {
  return (
    <div className="rightbarfriend">
    <div className="rightbarprofilecontainer">
      <img className="rightbarprofileimg" src={user.profilePicture} alt=""/> 
      <span className="rightbaronline"></span>
      </div>
      <span className="rightbarusername">{user.username}</span>
    </div>
  )
}
