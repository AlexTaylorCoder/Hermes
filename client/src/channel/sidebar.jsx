import { useState } from "react"
import {IoMdArrowDropdownCircle,IoMdArrowDropupCircle} from "react-icons/io"

const src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC"


function Sidebar() {
    //Contains channels and at bottom creatte channel
    const [expandChannel,setExpandChannel] = useState(true)
    const [expandChat,setExpandChat] = useState(true)
    const [expandRequest,setExpandRequest] = useState(true)

    const [hoverRequest,setHoverRequest] = useState(false)

    function handleClickProfile() {
        //Redirect to profile page of user 
    }

    function handleAcceptClick() {
        //Patch with status accept to db
    }

    function handleDeclineClick() {
        //Patch with status decline to db
    }

    return (
        
        <div id = "sidebar">
            <div className="sidebar-area">  
                <h3 className="hover-darker" onClick={()=>setExpandChannel(!expandChannel)}> {expandChannel ? <IoMdArrowDropdownCircle/> : <IoMdArrowDropupCircle/>}  Channels</h3>
                {expandChannel ? <div className="expand-channels"><h3># random</h3><h3> # random</h3></div> : null}
                <h3 className="hover-darker" onClick={()=>setExpandChat(!expandChat)}> {expandChat ? <IoMdArrowDropdownCircle/> : <IoMdArrowDropupCircle/>}  Chats</h3>
                {expandChat ? <div className="expand-channels"><h3># random</h3><h3> # random</h3></div> : null}
                <h3 className="hover-darker" onClick={()=>setExpandRequest(!expandRequest)}> {expandRequest ? <IoMdArrowDropdownCircle/> : <IoMdArrowDropupCircle/>}  Requests</h3>
                {expandRequest ? 
                    <div className="expand-channels"><h3 onMouseLeave={()=>setHoverRequest(!hoverRequest)} onMouseEnter={()=>setHoverRequest(!hoverRequest)}># random</h3><h3> # random</h3>
                        {hoverRequest ? 
                            <div className="hover-request hover-darker" onClick={handleClickProfile} onMouseLeave={()=>setHoverRequest(false)} onMouseEnter={()=>setHoverRequest(true)}>
                                <div className="hover-request-header">
                                    <p>Username</p><img src={src} width="35px" height="35px"/>
                                </div>
                                <div className="hover-request-footer">
                                    <p>Channel Name</p> 
                                    <div className="hover-request-footer-button">
                                        <button onClick={handleAcceptClick} className="accept">Accept</button> <button onClick={handleDeclineClick} className="decline">Decline</button>
                                    </div>
                                </div> 
                            </div> : null}
                    </div> : null}
            </div>
        </div>
    )
}

export default Sidebar