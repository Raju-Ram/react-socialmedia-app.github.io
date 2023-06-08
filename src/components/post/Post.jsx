import "./Post.css"
import { MoreVert } from "@mui/icons-material"


export default function Post() {
  return (
    <div className="post">
        <div className="postwrapper">
<div className="posttop">
    <div className="posttopleft">
        <img src="/assets/persons/P1.jpg" alt="" className="postprofilrimg"/>
        <span className="postusername">kumawatraj</span>
        <span className="postdate">5 mins ago</span>
    </div>
    <div className="posttopright">
<MoreVert/>
    </div>
</div>
<div className="postcenter">
    <span className="posttext">Hey! Its my first post:)</span>
    <img src="/assets/persons/P11.jpg" alt="" className="postimg"/>
</div>
<div className="postbuttom">
    <div className="postbottomleft">
        <img className="likeicon" src="/assets/post/heart.png" alt=""/>
        <img className="likeicon" src="/assets/post/like.png" alt=""/>
        <span className="postlikecounter">32 people like it</span>
    </div>
    <div className="postbottomright">
        <span className="postcommenttext">11 comments</span>
    </div>
</div>
        </div>
        </div>
  )
}
