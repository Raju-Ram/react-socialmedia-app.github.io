import "./Share.css"
import { EmojiEmotions, PermMedia,  Pin,  PinDrop, PushPin,  } from "@mui/icons-material"


export default function Share() {
    return (
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="/assets/persons/P1.jpg" alt="" className="shareprofileimg" />
                    <input
                        placeholder="what's is your mind safak"
                        className="shareinput" />
                </div>
                <hr className="sharehr" />
                <div className="sharebottom">
                    <div className="shareoptions">
                        <div className="shereoption">
                            <PermMedia htmlColor="pink" className="shareicon"/>
                            <span className="shareoptiontext">photo or video</span>

                        </div>
                        <div className="shereoption">
                            <PushPin htmlColor="blue" className="shareicon"/>
                            <span className="shareoptiontext">Tag</span>

                        </div>
                        <div className="shereoption">
                            <PinDrop htmlColor="green" className="shareicon"/>
                            <span className="shareoptiontext">Location</span>

                        </div>
                        <div className="shereoption">
                            < EmojiEmotions htmlColor="golden" className="shareicon"/>
                            <span className="shareoptiontext">Feelings</span>

                        </div>
            

                    </div>
                    <button className="sharebutton">share</button>
                </div>

            </div>

        </div>
    )
}
