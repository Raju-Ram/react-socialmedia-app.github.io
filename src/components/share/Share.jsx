import "./Share.css"

export default function Share() {
    return (
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="" alt="" className="shareprofileimg" />
                    <input
                        placeholder="what's is your mind safak"
                        className="shareinput" />
                </div>
                <hr className="sharehr" />
                <div className="sharebottom">
                    <div className="shareoptions">
                        <div className="shereoption">
                            <span className="shareoptiontext">photo or video</span>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
