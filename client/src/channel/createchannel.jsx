import { useState } from "react"
import { useNavigate } from "react-router-dom"

const header = {
    method: "POST",
    headers: {"Content-type": "application/json"}
}

function CreateChannel() {
    const navigate = useNavigate()

    const [name,setName] = useState("")
    function handleSubmit(e) { 
        e.preventDefault()
        fetch("/channels",{...header,body: JSON.stringify(name)}).then(resp=>resp.json)
        .then(data=> {
            navigate("/channel/"+data.id)
        })
    }
    return (
        <div id = "create-channel">
            <form onSubmit={handleSubmit}>
                <input onChange={()=>setName(e.target.value)} type="text" value={name}/>
            </form>
            
        </div>
    )
}

export default CreateChannel