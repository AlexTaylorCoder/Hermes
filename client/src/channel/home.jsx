import Sidebar from "./sidebar";
import Topbar from "./topbar";
import ChannelContainer from "./channelcontainer";
import PostMesssage from "./postmessage";
import { useEffect } from "react";

function Home() {
    //Pass channel metadata for sidebar
    //fetch first channel data to display as initial screen
    // useEffect(()=> {
    //   fetch("")
    // })
    return (
        <div id = "home">
        <Topbar/>
        <div className = "flex-items">
          <Sidebar/>
          <ChannelContainer/>
        </div>
      </div>   
    )
}

export default Home