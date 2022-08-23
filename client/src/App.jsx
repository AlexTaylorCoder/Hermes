import { useEffect, useState } from "react";
import CreateAccount from "./user/createaccount";
import Login from "./user/login";
import Sidebar from "./channel/sidebar";
import Topbar from "./channel/topbar";
import ChannelContainer from "./channel/channelcontainer";
import PostMesssage from "./channel/postmessage";
function App() { 
  const [user,setUser] = useState({})

  useEffect(()=> {
    fetch("/users").then(resp=>resp.json()).then(setUser)
  },[])

  console.log(user)
  return (
    <div className="App">
    <Topbar/>
    <div className = "flex-items">
      <Sidebar/>
      <ChannelContainer/>
    </div>
    {/* <CreateAccount/> */}
    {/* <Login /> */}
    </div>
  );
}

export default App;
