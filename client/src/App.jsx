import { useEffect, useState } from "react";
import CreateAccount from "./user/createaccount";
import Login from "./user/login";

function App() { 
  const [user,setUser] = useState({})

  useEffect(()=> {
    fetch("/users").then(resp=>resp.json()).then(setUser)
  },[])

  console.log(user)
  return (
    <div className="App">


    <CreateAccount/>

    {/* <Login /> */}
    </div>
  );
}

export default App;
