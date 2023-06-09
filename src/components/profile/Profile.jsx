import "./Profile.css"
import Topnavbar from '../../components/topnavbar/Topnavbar'
import Sidebar from '../../components/sidebaar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Profile() {
  return (
    <>
        <Topnavbar/>
        <div className='profile'>

        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profilecover">
             

                <img className="profilecoverimg" src="/assets/persons/P2.jpg" alt=""/>
                <img className="profilecoverimg" src="/assets/persons/P1.jpg" alt=""/>
                </div>
            </div>
            <div className="profileinfo">
                <h4 className="profileinfoname">raju ram</h4>
                <span className="profileinfodesc">Hello my friends!</span>
            </div>
            <div className="profileRightBottom">
        <Feed/>
        <Rightbar/>
        </div>
        </div>
        </div>
        </>
  )
}
