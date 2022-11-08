import { useEffect, useState } from "react"
import {AiOutlineLogout} from "react-icons/ai"
import {useHistory} from "react-router-dom"

const header = {
    method: "DELETE",
    headers: {"Content-type": "application/json"}
}
function Topbar({handleProfileClick,prof="",username="",setUser}) {
    const history = useHistory()
    const [imageClick,setImageClick] = useState(false)

    function clickProfile() {
        setImageClick(false)
        handleProfileClick()

    }


    function handleLogOut() {
        fetch("/logout",header)
        .then(r=> {
            if (r.ok) {
                setUser({})
                history.push("/login")
            }
            else {
                console.log("Failed to Logout")
            }
        })
    }

    function clickMessageHistory() {
        console.log("click")
    }
    return (
        <div id = "topbar">
            <input className="topbar-search-input" placeholder="search" type='text'/>
            <div className="topbar-left">
                <img className="no-stretch-image" onClick={()=>setImageClick(!imageClick)} src={prof} height="35px" width="35px"/>
                {imageClick ? 
                    <div className="topbar-click">
                        <div className="topbar-click-header">
                            <h2> {username}</h2>
                            <img className="no-stretch-image" src={prof} height="50px" width="50px"/>
                        </div>
                        <ul className="topbar-click-body">
                            <li onClick={clickMessageHistory}>Messages</li>
                            <li onClick={clickProfile}>Profile</li>
                            <AiOutlineLogout onClick={handleLogOut}/> 
                        </ul>                 
                    </div> 
                    : null}
            </div>
        </div>
    )
}

export default Topbar