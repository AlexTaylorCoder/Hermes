

function Login() {

    return (
        <div id = "login">
             <div className = "container">
                <form>
                    <h2> Hermes </h2>
                    <h4> Create account </h4>
                    <input id = "username" type="text" placeholder="username"/> 
                    <input id = "password"type="password" placeholder="password"/>
                    <input id = "but" type="submit" value="Send"/>
                </form>
             </div>
        </div>
    )
}

export default Login