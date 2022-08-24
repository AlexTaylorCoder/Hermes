//This component is responsible for loging into an account 

import { useState } from "react";
import {useHistory} from "react-router-dom"

function Login({handleSetUser} ) {

    const history = useHistory()
 
    const[username, setUserName] = useState("")
    const[password, setPassword] = useState("")

    const[success,setSuccess] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((r) => {
            if (r.ok) {
              r.json().then(()=>handleSetUser).then(()=>history.push("/home"))
            }
          })
      }

    return (
        <div id = "login">
             <div className = "container">
                <form onSubmit = {handleSubmit} >
                    <h2> Hermes </h2>

                    <h4> Login </h4>

                    <label for = "username">User Name</label>
                    <input id = "username" type="text" placeholder="Username" value = {username} onChange={(e) => setUserName(e.target.value)}/> 

                    <label for = "password">Password</label>
                    <input id = "password" type="password" placeholder="Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>

                    <input type = "submit" value="Login"/>
                    <button onClick = {() => history.push("/createaccount")}>Create Account</button>

                </form>
             </div>
        </div>
    )
}

export default Login