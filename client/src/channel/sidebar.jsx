import { useState } from "react"
import {IoMdArrowDropdownCircle,IoMdArrowDropupCircle} from "react-icons/io"

function Sidebar() {
    //Contains channels and at bottom creatte channel
    const [expandChannel,setExpandChannel] = useState(true)
    return (
        
        <div id = "sidebar">
            <div className="sidebar-area">  
                <h3 onClick={()=>setExpandChannel(!expandChannel)}> {expandChannel ? <IoMdArrowDropdownCircle/> : <IoMdArrowDropupCircle/>}  Channels</h3>
                {expandChannel ? <div className="expand-channels"><h3># random</h3><h3> # random</h3></div> : null}
                <h3><IoMdArrowDropdownCircle/> Chats</h3>
            </div>
        </div>
    )
}

export default Sidebar