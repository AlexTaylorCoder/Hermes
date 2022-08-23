import { useEffect, useState } from "react"


function PostMesssage() {
    const [skip,setSkip] = useState(true)
    const [bold,setBold] = useState(false)
    const [italics,setItalics] = useState(false)
    const [strike,setStrike] = useState(false)

    const [text,setText] = useState("")

    // useEffect(()=> {
    //     if (skip) setSkip(false)
    //     else {
    //         if (bold === true) {
    //             setText("<b>")
    //         }
    //         else {
    //             setText(...text,"</b>")
    //         }
    // }
    // },[bold])

    
    console.log(text)
    console.log(bold)
    function handleInput(e) {

        setText(e.target.value)
    }
    return (
        <div id = "post-message">
            <div className="post-message-top">
               <h3 onClick={()=>setBold(!bold)}>B</h3>
               <h3 onClick={()=>setItalics(!italics)}><i>I</i></h3>
               <h3 onClick={()=>setStrike(!strike)}><s>S</s></h3>
            </div>
            <textarea style={ bold ? {fontWeight:"bold"} : {fontWeight: "normal"}} onChange={handleInput} value={text}/>
            <div className = "post-message-bottom">
                <div className = "box-icon">
                    <h3>+</h3>
                </div>
            </div>
        </div>
    )
}

export default PostMesssage