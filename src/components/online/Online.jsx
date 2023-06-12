import "./Online.css"

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="rightbarfriend">
    <div className="rightbarprofilecontainer">
      <img className="rightbarprofileimg" src={PF+user.profilePicture} alt=""/> 
      <span className="rightbaronline"></span>
      </div>
      <span className="rightbarusername">{user.username}</span>
    </div>
  )
}
