import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import {Users} from "../../dummyData";
import {useState} from "react";



export default function Post({post }) {

    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLike] = useState(false)
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const likeHnadler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLike(!isLiked)
        console.log(post, PF);
    }

// const user = Users.filtter(u=>u.id===1)



    // console.log(post); 
    // console.log(user); 
  return (
    <div className="post">
        <div className="postwrapper">
<div className="posttop">
    <div className="posttopleft">
        <img src={PF + Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postprofilrimg"/>
        <span className="postusername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
        <span className="postdate">{post.date}</span>
    </div>
    <div className="posttopright">
<MoreVert/>
    </div>
</div>
<div className="postcenter">
    <span className="posttext">{post?.desc}</span>
    <img src={PF+post.photo} alt="" className="postimg"/>
</div>
<div className="postbuttom">
    <div className="postbottomleft">
        <img className="likeicon" src={`${PF}post/heart.png`} onClick={likeHnadler} alt=""/>
        <img className="likeicon" src={`${PF}post/like.png`} onClick={likeHnadler} alt=""/>
        <span className="postlikecounter">{like}people like it</span>
    </div>
    <div className="postbottomright">
        <span className="postcommenttext">{post.comment} comments</span>
    </div>
</div>
        </div>
        </div>
  )
}
