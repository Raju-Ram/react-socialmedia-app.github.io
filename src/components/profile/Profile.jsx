import "./Profile.css"
import Topnavbar from '../topnavbar/Topnavbar'
import Sidebar from '../sidebaar/Sidebar'
import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'

export default function Profile() {
    return (
        <>
            <Topnavbar />
            <div className='profile'>
  
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profilecover">
                            <img className="profilecoverimg" src="/assets/persons/P2.jpg" alt="" />
                            <img className="profileuserimg" src="/assets/persons/P1.jpg" alt="" />
                        </div>
                    <div className="profileinfo">
                        <h4 className="profileinfoname">KumawatRaj</h4>
                        <span className="profileinfodesc">Hello my friends!</span>
                    </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar Profile />
                    </div>
                </div>
            </div>
        </>
    )
}
