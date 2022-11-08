import { useState } from "react"
import { Button } from "react-bootstrap"

const header = {
    method: "DELETE",
    headers: {"Content-type": "application/json"}
}
const src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC"

function Message({post="",likes="",isPinned="",createdAt="",updatedAt="", sender="",user_id,id}) {

    const [hoverMessage,setHoverMessage] = useState(false)
    console.log(post)

    function handleDeleteButton() {
        fetch("/messages/"+id,header)
    }

    const dateobj = new Date(createdAt)
    const date = dateobj.toLocaleDateString()
    return (
        <div id = "message" onMouseLeave={()=>setHoverMessage(false)} onMouseEnter={()=>setHoverMessage(true)}>
            <div className="message-header">
            <img className="no-stretch-image" src={sender.prof} height="50px" width="48px"/>
                <div className="message-body">
                    <h3>{sender.username}</h3>
                </div>
                <h3><small>{date}</small></h3>
            { hoverMessage && user_id === sender.id ?
                <Button onClick={handleDeleteButton} primary="danger">Delete</Button> : null
                }
            </div>
            <div dangerouslySetInnerHTML= {{__html: post}}/>
        </div>
    )
}

export default Message