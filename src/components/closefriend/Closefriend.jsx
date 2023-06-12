import "./Closefriend.css"

export default function Closefriend({user}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebarfriend">
    <img src={PF + user.profilePicture} alt=""  className="sidebarfriendimg"/>
   <span className="sidebarfriendname">{user.username}</span>
   </li>
  )
}
