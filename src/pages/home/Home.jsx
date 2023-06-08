import "./Home.css"
import Topnavbar from '../../components/topnavbar/Topnavbar'
import Sidebar from '../../components/sidebaar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Home() {
  return (
        <>
        <Topnavbar/>
        <div className='homecontainer'>

        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
        </>
  );
}

