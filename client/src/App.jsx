import { useEffect, useState } from "react";
import CreateAccount from "./user/createaccount";
import Login from "./user/login";
import PostMesssage from "./channel/postmessage";
import Message from "./channel/message";
import Sidebar from "./channel/sidebar";
import Topbar from "./channel/topbar";
function App() { 
  const [user,setUser] = useState({})

  useEffect(()=> {
    fetch("/users").then(resp=>resp.json()).then(setUser)
  },[])

  console.log(user)
  return (
    <div className="App">
    <Topbar/>
    <Sidebar/>
    {/* <CreateAccount/> */}
    <Message />
    {/* <Login /> */}
    </div>
  );
}

export default App;
