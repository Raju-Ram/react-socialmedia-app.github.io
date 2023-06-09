import "./Closefriend.css"

export default function Closefriend({user}) {
  return (
    <li className="sidebarfriend">
    <img src={user.profilePicture} alt=""  className="sidebarfriendimg"/>
   <span className="sidebarfriendname">{user.username}</span>
   </li>
  )
}
