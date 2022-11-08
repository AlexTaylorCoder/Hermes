import { useState } from "react"

const src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC"
const header = {
    method: "POST",
    headers: {"Content-type": "application/json"}
}

function Request({handleAddChannel,request={}}) {

    const [hoverRequest,setHoverRequest] = useState(false)
    function handleAcceptClick() {
        fetch("/members",{...header,body:JSON.stringify({
            channel_id:request.channel.id,
        })}).then(resp=>resp.json()).then(handleAddChannel)
    }

    function handleDeclineClick() {
        //Patch with status decline to db
    }
    function handleClickProfile() {
        //Redirect to profile page of user 
    }

    return (
        <>
        <h3 onMouseLeave={()=>setHoverRequest(false)}
            onMouseEnter={()=>setHoverRequest(true)}>
            {request.request_member.name}
        </h3>
        {hoverRequest ? 
        <div onMouseEnter={()=>setHoverRequest(true)} className="hover-request" onMouseLeave={()=>setHoverRequest(false)} onMouseEnter={()=>setHoverRequest(true)}>
            <div className="hover-request-header">
                <h3>{request.request_member.name}</h3><img src={src} width="35px" height="35px"/>
            </div>
            <div className="hover-request-footer">
                <h3>{request.channel.name}</h3> 
                <div className="hover-request-footer-button">
                    <button onClick={handleAcceptClick} className="accept">Accept</button> <button onClick={handleDeclineClick} className="decline">Decline</button>
                </div>
            </div> 
        </div> : null}
        </>
    )
}


export default Request