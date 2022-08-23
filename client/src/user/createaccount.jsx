//This component is responsible for creating an account 

import { useContext, useState } from "react";
import {useHistory} from "react-router-dom"


function CreateAccount( {setCreate} ) {

    const history = useHistory()

    const[first_name, setFirstName] = useState("")
    const[last_name, setLastName] = useState("")
    const[username, setUserName] = useState("")
    const[password, setPassword] = useState("")
    const[email, setEmail] = useState("")
    const[prof, setProf] = useState("")
    const[bio, setBio] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ first_name, last_name, username, password, email, prof, bio }),

        })
          .then((r) => r.json())
          .then();
      }

    return (
        <div id = "login">
             <div className = "container">

                <form onSubmit = {handleSubmit}>
                    <h2> Hermes </h2>

                    <h4> Create account </h4>

                    <lable for = "first_name">First Name</lable>
                    <input id = "first_name" type = "text" placeholder = "First Name" value = {first_name} onChange={(e) => setFirstName(e.target.value)}/>

                    <label for = "last_name">Last Name</label>
                    <input id = "last_name" type = "text" placeholder = "Last Name" value = {last_name} onChange={(e) => setLastName(e.target.value)}/>

                    <label for = "username">User Name</label>
                    <input id = "username" type="text" placeholder="Username" value = {username} onChange={(e) => setUserName(e.target.value)}/> 

                    <label for = "password">Password</label>
                    <input id = "password" type="password" placeholder="Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>

                    <label for = "email">Email </label>
                    <input id = "email" type="text" placeholder="Email Address" value = {email} onChange={(e) => setEmail(e.target.value)}/>

                    <label for = "prof">Profile Picture</label>
                    <input id = "prof" type = "text" placeholder="Prfile Picture" value = {prof} onChange={(e) => setProf(e.target.value)}/>

                    <label for = "bio">Bio</label>
                    <input id = "bio" type = "text" placeholder="Bio" value = {bio} onChange={(e) => setBio(e.target.value)}/>

                    <button type = "submit">Create Account</button>
                    <button onClick = {() => history.push("/login")}>Sign in</button>

                </form>
                
             </div>
        </div>
    )
}

export default CreateAccount