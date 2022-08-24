import { useEffect, useState } from "react";
import Message from "./message"
import PostMesssage from "./postmessage";

//Useef
function ChannelContainer() {

    const [channelData,setChannelData] = useState({})
    useEffect(()=> {
        //fetch() based on data from usenavigate from clicking on sidebar
    })

    return (
        <div id ="channel-container">
            <div className="channel-top">
                <h3>Channel</h3>
                <p>member count</p>
            </div>
            <div className="message-container">
                <Message />
            </div>

            <div className="post-message-container">
                <PostMesssage />
            </div>
        </div>
    )
    //Pass down channel id to postmessage
}


export default ChannelContainer