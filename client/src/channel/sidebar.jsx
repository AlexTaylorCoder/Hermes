import { useEffect, useState } from "react"
import {IoMdArrowDropdownCircle,IoMdArrowDropupCircle} from "react-icons/io"
import {AiOutlinePlus} from "react-icons/ai"
import CreateChannel from "./createchannel"
import Request from "./request"
import Load from "./load"


function Sidebar({handleAddChannel,channels=[],requests=[],handleSwitchChannel}) {
    //Contains channels and at bottom creatte channel
    const [modalShow,setModalShow] = useState(false)
    const [expandChannel,setExpandChannel] = useState(true)
    const [expandChat,setExpandChat] = useState(true)
    const [expandRequest,setExpandRequest] = useState(true)

    const [hoverRequest,setHoverRequest] = useState(false)

    const [modalData,setmodalData] = useState("")

    console.log(requests)

    const channelsList = channels.map(channel=><h3 id={channel.id} onClick={handleSwitchChannel} key={channel.id}>{channel.name}</h3>)
    const requestsList = requests.map(request=><Request handleAddChannel={handleAddChannel} key={request.id} request={request} />)

    return (
        
        <div id = "sidebar">
            <div className="sidebar-area">  
                <h3 className="hover-darker" onClick={()=>setExpandChannel(!expandChannel)}> {expandChannel ? <IoMdArrowDropdownCircle/> : <IoMdArrowDropupCircle/>}  Channels</h3>
                {expandChannel ? <div className="expand-channels"> {channelsList}</div> : null}
                <h3 onClick={()=> {setModalShow(true);setmodalData("channel") }} className="hover-darker"><AiOutlinePlus/> Create Channel</h3>
                <h3 className="hover-darker" onClick={()=>setExpandChat(!expandChat)}> {expandChat ? <IoMdArrowDropdownCircle/> : <IoMdArrowDropupCircle/>}  Chats</h3>
                {expandChat ? <div className="expand-channels"></div> : null}
                <h3 className="hover-darker" onClick={()=>setExpandRequest(!expandRequest)}> {expandRequest ? <IoMdArrowDropdownCircle/> : <IoMdArrowDropupCircle/>}  Requests</h3>
                {expandRequest ? 
                    <div className="expand-channels">
                    { requestsList }
                    </div> : null}
                <CreateChannel modalData={modalData} handleAddChannel={handleAddChannel} show = {modalShow} onHide={() => setModalShow(false)}/>
            </div>
        </div>
    )
}

export default Sidebar