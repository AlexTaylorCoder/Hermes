import { useState, useCallback } from "react"
import {Editor,EditorState,RichUtils} from "draft-js"
import 'draft-js/dist/Draft.css';


function PostMesssage() {
const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const handleKeyCommand = useCallback((command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)

      return "handled"
    }
    return "not-handled"
  })

  const _onBoldClick = useCallback(() => {
    console.log("clicked")
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
  })
  return (
    <div id = "post-message">
            <div className="post-message-top">
               <h3 onClick={_onBoldClick}>B</h3>
               <h3><i>I</i></h3>
               <h3><s>S</s></h3>
            </div>
            <Editor editorState={editorState} handleKeyCommand={handleKeyCommand} onChange={setEditorState} />
            <div className = "post-message-bottom">
                <div className = "box-icon">
                    <h3>+</h3>
                </div>
            </div>
        </div>
  )

}

export default PostMesssage