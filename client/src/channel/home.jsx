import Sidebar from "./sidebar";
import Topbar from "./topbar";
import ChannelContainer from "./channelcontainer";
import { useEffect, useState } from "react";
import Profile from "../user/profile";

function Home({setUser,user={}}) {
    //Pass channel metadata for sidebar
    //fetch first channel data to display as initial screen
    const [currentChannel,setCurrentChannel] = useState({})
    const [channels, setChannels] = useState([])
    const [details, setDetails] = useState({})
    
  console.log(user)
  console.log(details)
   useEffect(()=> {
      if (user.channels) {
          setDetails({username:user.username,first_name:user.first_name,last_name:user.last_name,email:user.email,prof:user.prof,bio:user.bio})
          if (user.channels.length > 0) {
            setChannels(user.channels)
            fetch("/channels/"+user.channels[0].id).then(resp=>resp.json()).then(setCurrentChannel)
          }
      }
      },[user])

    const [profileClick,setProfileClick] = useState(false)
  
    function handleAddChannel(returned) {
      setCurrentChannel(returned)
      setChannels([...channels,returned.channel])
    }

    function handleDeleteChannel(id) {
      console.log(id)
      const filteredChannel = channels.filter(channel=> channel.id !== id)
      setChannels(filteredChannel)
      console.log("Channels:",channels)
    
      if (channels.length > 0) {  
        fetch("channels/"+channels[0].id).then(resp=>resp.json()).then(setCurrentChannel)
      }
      else {
        setCurrentChannel([])
      }
    }
    
    function handleSwitchChannel(returned) {
      const id = returned.target.id
      fetch("/channels/"+id).then(resp=>resp.json()).then(setCurrentChannel)
      
    }

    function handleProfileClick() {
        setProfileClick(true)
    }
    return (
        <div id = "home">
        <Topbar setUser={setUser} handleProfileClick={handleProfileClick} username={details.username} prof={details.prof}/>
        <div className = "flex-items">
          <Sidebar handleAddChannel={handleAddChannel} channels={channels} requests={user.requests} handleSwitchChannel={handleSwitchChannel} />
          {/* <Load/> */}
          <ChannelContainer handleDeleteChannel={handleDeleteChannel} currentChannel={currentChannel} userId={user.id} />
        { profileClick ? <Profile details={details} setProfileClick={setProfileClick}/> : null}
        </div>
      </div>   
    )
}

export default Home