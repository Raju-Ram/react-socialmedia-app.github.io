import "./Share.css"
import { PermMedia } from "@mui/icons-material"


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
                            <PermMedia htmlColor="blue" className="shareicon"/>
                            <span className="shareoptiontext">Tag</span>

                        </div>
                        <div className="shereoption">
                            <PermMedia htmlColor="green" className="shareicon"/>
                            <span className="shareoptiontext">Location</span>

                        </div>
                        <div className="shereoption">
                            < PermMedia htmlColor="golden" className="shareicon"/>
                            <span className="shareoptiontext">Feelings</span>

                        </div>
            

                    </div>
                    <button className="sharebutton">share</button>
                </div>

            </div>

        </div>
    )
}
