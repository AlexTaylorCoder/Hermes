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


    fetch("/users")
    .then(resp=>resp.json() )
    .then(setUser)

  },[])


  console.log(user)
  return (
    <div>
      <Switch>
        <Route path = "/login">
          <Login setUser={setUser} />
        </Route>
        <Route path = "/">
          <CreateAccount setUser={setUser}/>
        </Route>
      </Switch>
    </div>

    
  )
}

export default App 
