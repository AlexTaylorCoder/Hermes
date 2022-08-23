import Message from "./message"
import PostMesssage from "./postmessage";


function ChannelContainer() {
    return (
        <div id ="channel-container">
            <div className="channel-top">
                <h3>Channel</h3>
            </div>
            <div className="message-container">
                <Message />
            </div>

            <div className="post-message-container">
                <PostMesssage/>
            </div>
        </div>
    )
}


export default ChannelContainer