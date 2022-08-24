import Sidebar from "./sidebar";
import Topbar from "./topbar";
import ChannelContainer from "./channelcontainer";
import PostMesssage from "./postmessage";
import { useEffect, useState } from "react";
import Profile from "../user/profile";
import Load from "./load";

function Home() {
    //Pass channel metadata for sidebar
    //fetch first channel data to display as initial screen
    // useEffect(()=> {
    //   fetch("")
    // })

    const [profileClick,setProfileClick] = useState(false)

    function handleProfileClick() {
        setProfileClick(true)
    }
    return (
        <div id = "home">
        <Topbar handleProfileClick={handleProfileClick}/>
        <div className = "flex-items">
          <Sidebar/>
          {/* <Load/> */}
          <ChannelContainer/>
        { profileClick ? <Profile setProfileClick={setProfileClick}/> : null}
        </div>
      </div>   
    )
}

export default Home