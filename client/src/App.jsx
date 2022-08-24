import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import CreateAccount from "./user/createaccount";
import Login from "./user/login";
import Home from "./channel/home";
function App() { 

  const [user,setUser] = useState({})


  useEffect(()=> {


    fetch("/users")
    .then(resp=>resp.json() )
    .then(setUser)

  },[])

 //Fetch all channels 
  // On click on channel fetch member and message info
  //Pass down to sidebar which maps item

  //Add on click to each item with goes to link
  console.log(user)
  return (
    <div>
      <Switch>
        <Route path = "/login">
          <Login setUser={setUser} />
        </Route>
        <Route path = "/home">
          <Home setUser={setUser} />
        </Route>
        <Route path = "/">
          <CreateAccount setUser={setUser}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App 
