import { useState } from "react"
import {Editor,EditorState,RichUtils} from "draft-js"
import 'draft-js/dist/Draft.css';


function PostMesssage() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    return (
        <div id = "post-message">
            <div className="post-message-top">
               <h3 onClick={()=>RichUtils.toggleInlineStyle("BOLD")}>B</h3>
               <h3 onClick={()=>RichUtils.toggleInlineStyle("BOLD")}><i>I</i></h3>
               <h3 onClick={()=>RichUtils.toggleInlineStyle("BOLD")}><s>S</s></h3>
            </div>
            <Editor editorState={editorState} onChange={setEditorState} />
            <div className = "post-message-bottom">
                <div className = "box-icon">
                    <h3>+</h3>
                </div>
            </div>
        </div>
    )
}

export default PostMesssage