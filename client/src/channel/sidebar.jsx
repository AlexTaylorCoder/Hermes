import {IoMdArrowDropdownCircle} from "react-icons/io"

function Sidebar() {
    //Contains channels and at bottom creatte channel
    return (
        
        <div id = "sidebar">
            <div className="sidebar-area">
                <h3><IoMdArrowDropdownCircle/>Channels</h3>
                <h3><IoMdArrowDropdownCircle/>Chats</h3>
            </div>
        </div>
    )
}

export default Sidebar