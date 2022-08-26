import { useEffect, useState } from "react";
import Message from "./message"
import PostMesssage from "./postmessage";
import Load from "./load";
import RequestModal from "./requestmodal";
import DeleteModal from "./deletechannel";

//Useef
function ChannelContainer({currentChannel={},userId}) {


    const [load,setLoad] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [deleteModalShow,setDeleteModal] = useState(false);

    useEffect(()=> {
        if (currentChannel.channel) {
            setLoad(true)
        }

    },[currentChannel])

    const messageList = currentChannel?.channel?.messages?.map(mes=><Message key={mes.id} user_id={userId} id={mes.id} sender={mes.sender} post={mes.post} likes={mes.likes} updatedAt={mes.updated_at} createdAt={mes.created_at} isPinned={mes.isPinned} />)

    function showModal() {

    }
    return (
        <div id ="channel-container">
            {load ?
            <>
                <div className="channel-top">
                    <h3>{currentChannel.channel.name}</h3>
                    {currentChannel.member.isAdmin ?
                    <>
                        <p onClick={()=>setModalShow(true)}> Invite to {currentChannel.channel.name}</p>
                        <p onClick={()=>setDeleteModal(true)}> Delete {currentChannel.channel.name} </p>
                    </>
                    : null }
                    <p>{currentChannel.channel.member_count}</p>
                </div>
                <div className="message-container">
                    {messageList}
                </div>

                <div className="post-message-container">
                    <PostMesssage member_id={currentChannel.member.id} channel_id={currentChannel.channel.id}  />
                </div> 
                <RequestModal member_id={currentChannel.member.id} show={modalShow} onHide={() => setModalShow(false)}/>
                <DeleteModal name={currentChannel.channel.name} id={currentChannel.channel.id} show={deleteModalShow} onHide={()=> setDeleteModal(false)}/>
            </>
            : <Load/> }
        </div>

    )
    //Pass down channel id to postmessage
}


export default ChannelContainer