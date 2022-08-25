import { useEffect, useState } from "react";
import Message from "./message"
import PostMesssage from "./postmessage";

//Useef
function ChannelContainer({currentChannel=[]}) {
    
  
        const messageList = currentChannel?.messages?.map(mes=><Message key={mes.id} post={mes.post} likes={mes.likes} updatedAt={mes.updated_at} createdAt={mes.created_at} isPinned={mes.isPinned} />)
        console.log(currentChannel)
    return (
        <div id ="channel-container">
            <div className="channel-top">
                <h3>{currentChannel.name}</h3>
                <p>{currentChannel.member_count}</p>
            </div>
            <div className="message-container">
                {messageList}
            </div>

            <div className="post-message-container">
                <PostMesssage channel_id={currentChannel.id}  />
            </div>
        </div>
    )
    //Pass down channel id to postmessage
}


export default ChannelContainer