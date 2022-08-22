//This component is responsible for creating an account 

import { useState } from "react";

function CreateAccount( onLogin ) {

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[userName, setUserName] = useState("")
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
          body: JSON.stringify({ firstName, lastName, userName, password, email, prof, bio }),
        })
          .then((r) => r.json())
          .then((users) => onLogin(users));
      }

    return (
        <div id = "login">
             <div className = "container">
                <form onsubmit = {handleSubmit} >
                    <h2> Hermes </h2>

                    <h4> Create account </h4>

                    <lable for = "first_name">First Name</lable>
                    <input id = "first_name" type = "text" placeholder = "First Name" value = {firstName} onChange={(e) => setFirstName(e.target.value)}/>

                    <label for = "last_name">Last Name</label>
                    <input id = "last_name" type = "text" placeholder = "Last Name" value = {lastName} onChange={(e) => setLastName(e.target.value)}/>

                    <label for = "username">User Name</label>
                    <input id = "username" type="text" placeholder="Username" value = {userName} onChange={(e) => setUserName(e.target.value)}/> 

                    <label for = "password">Password</label>
                    <input id = "password" type="password" placeholder="Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>

                    <label for = "email">Email </label>
                    <input id = "email" type="text" placeholder="Email Address" value = {email} onChange={(e) => setEmail(e.target.value)}/>

                    <label for = "prof">Profile Picture</label>
                    <input id = "prof" type = "text" placeholder="Prfile Picture" value = {prof} onChange={(e) => setProf(e.target.value)}/>

                    <label for = "bio">Bio</label>
                    <input id = "bio" type = "text" placeholder="Bio" value = {bio} onChange={(e) => setBio(e.target.value)}/>

                    <button type = "submit">Create Account</button>

                </form>
             </div>
        </div>
    )
}

export default CreateAccount