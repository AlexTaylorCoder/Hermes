import Sidebar from "./sidebar";
import Topbar from "./topbar";
import ChannelContainer from "./channelcontainer";
import PostMesssage from "./postmessage";
import { useEffect, useState } from "react";
import Profile from "../user/profile";
import Load from "./load";

function Home({user={}}) {

    //Pass channel metadata for sidebar
    //fetch first channel data to display as initial screen
    const [currentChannel,setCurrentChannel] = useState({})
    const [channels, setChannels] = useState([])
    const [details, setDetails] = useState({})

    const [profileClick,setProfileClick] = useState(false)

    useEffect(()=> {
      console.log(user.username)

      if (Object.keys(user).length !== 0 && Object.keys(user.channels).length !== 0) {
        fetch("/channels/"+user.channels[0].id).then(resp=>resp.json()).then(setCurrentChannel)
      }
    },[])

    function handleProfileClick() {
        setProfileClick(true)
    }
    return (
        <div id = "home">
        <Topbar handleProfileClick={handleProfileClick}/>
        <div className = "flex-items">
          <Sidebar channels={channels}/>
          {/* <Load/> */}
          <ChannelContainer/>
        { profileClick ? <Profile details={{username:user.username,first_name:user.first_name,last_name:user.last_name,email:user.email,prof:user.prof,bio:user.bio}} setProfileClick={setProfileClick}/> : null}

        </div>
      </div>   
    )
}

export default Home