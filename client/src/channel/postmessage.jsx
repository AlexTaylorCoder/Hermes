import { useState, useCallback } from "react"
import {Editor,EditorState,RichUtils,convertToRaw} from "draft-js"
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
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
  })

  const _onItalicClick = useCallback(() => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
  })
  
  return (
    <div id = "post-message">
            <div className="post-message-top">
               <h3 onClick={_onBoldClick}>B</h3>
               <h3 onClick={_onItalicClick}><i>I</i></h3>
               <h3><s>S</s></h3>
            </div>
            <Editor editorState={editorState} handleKeyCommand={handleKeyCommand} onChange={setEditorState} />
            <div className = "post-message-bottom">
                <div className = "box-icon">
                    <h3>+</h3>
                </div>
                <p style={{marginLeft:"200px"}}>e</p>
            </div>
        </div>
  )

}

export default PostMesssage