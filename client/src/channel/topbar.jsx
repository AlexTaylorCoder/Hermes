import { useState } from "react"
import {AiOutlineLogout} from "react-icons/ai"
import {useHistory} from "react-router-dom"

const src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC"

const header = {
    method: "DELETE",
    headers: {"Content-type": "application/json"}
}
function Topbar({handleProfileClick,prof=""}) {
    const history = useHistory()
    const [imageClick,setImageClick] = useState(false)

    function clickProfile() {
        setImageClick(false)
        handleProfileClick()

    }

    function handleLogOut() {
        fetch("/logout",header)
        history.push("/login")
    }

    function clickMessageHistory() {
        console.log("click")
    }
    return (
        <div id = "topbar">
            <p>awrawr</p>
            <p>awrawr</p>
            <input className="topbar-search-input" placeholder="search" type='text'/>
            <p>awrawr</p>
            <div className="topbar-left">
                <img onClick={()=>setImageClick(!imageClick)} src={prof} height="35px" width="35px"/>
                {imageClick ? 
                    <div className="topbar-click">
                        <div className="topbar-click-header">
                            <h2> Username</h2>
                            <img src={src} height="50px" width="50px"/>
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