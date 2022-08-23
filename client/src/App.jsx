import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import CreateAccount from "./user/createaccount";
import Login from "./user/login";

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

      

    </div>






    // <div className="App">
    // <CreateAccount setCreate = {setCreate}/> 
    // <Login setLogin = {setLogin}/> 
    // </div>
  );
}

export default App;
