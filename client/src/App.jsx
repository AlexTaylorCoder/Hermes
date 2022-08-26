import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import CreateAccount from "./user/createaccount";
import Login from "./user/login";
import Home from "./channel/home";
function App() { 

  const [user,setUser] = useState({})

 //Fetch all channels 
  // On click on channel fetch member and message info
  //Pass down to sidebar which maps item
  useEffect(()=> {
    fetch("/auth").then(resp=>resp.json()).then(setUser)

  },[])



  function handleSetUser(returned) {
    console.log(returned)
    setUser(returned)
  }

  //Add on click to each item with goes to link
  return (

    <div>
      <Switch>
        <Route path = "/login">
          <Login handleSetUser={handleSetUser} />
        </Route>
        <Route path = "/home">
          <Home user={user} />
        </Route>
        <Route path = "/">
          <CreateAccount handleSetUser={handleSetUser}/>
        </Route>
        {/* <Route path = "/profile/:id">
          <Profile />
        </Route> */}
      </Switch>
    </div>
  )
}

export default App 
