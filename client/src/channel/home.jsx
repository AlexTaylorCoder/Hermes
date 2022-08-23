import Sidebar from "./sidebar";
import Topbar from "./topbar";
import ChannelContainer from "./channelcontainer";
import PostMesssage from "./postmessage";

function Home() {

    return (
        <div className="App">
        <Topbar/>
        <div className = "flex-items">
          <Sidebar/>
          <ChannelContainer/>
        </div>
      </div>   
    )
}

export default Home