import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import CreateAccount from "./user/createaccount";
import Login from "./user/login";
import Sidebar from "./channel/sidebar";
import Topbar from "./channel/topbar";
import ChannelContainer from "./channel/channelcontainer";
import PostMesssage from "./channel/postmessage";
function App() { 

  const [user,setUser] = useState({})


  useEffect(()=> {


    fetch("/user")
    .then( resp=>resp.json() )
    .then(setUser)

  },[])


  console.log(user)
  return (

    <div>
      <Switch>
        <Route path = "/login">
          <Login />
        </Route>
        <Route path = "/">
          <CreateAccount />
        </Route>
      </Switch>


    {/* <div className="App">
    <Topbar/>
    <div className = "flex-items">
      <Sidebar/>
      <ChannelContainer/>
    </div>
    {/* <CreateAccount/> */}
    {/* <Login /> */}
    {/* >>>>>>> 812c0177b9ba62434ccce9fa5646e1acd1e05b1c
    </div> */}
    </div> 
  )
}

export default App 
