import { useState } from "react"
import { Modal,Button,Form } from "react-bootstrap"

// import { useNavigate } from "react-router-dom"

const header = {
    method: "POST",
    headers: {"Content-type": "application/json"}
}

function CreateChannel({show,onHide,handleAddChannel}) {
    // const navigate = useNavigate()

    const [name,setName] = useState("")
    // function handleSubmit(e) { 
    //     e.preventDefault()
    //     fetch("/channels",{...header,body: JSON.stringify(name)}).then(resp=>resp.json)
    //     .then(data=> {
    //         navigate("/channel/"+data.id)
    //     })
    // }
    function handleSubmit() {
        onHide()
        fetch("/channels",{...header,body:JSON.stringify({name})}).then(resp=>resp.json()).then(handleAddChannel)
    }

    return (
        <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>
            Create Channel
          </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Channel Name</Form.Label>
              <Form.Control onChange={(e)=>setName(e.target.value)}
                type="email"
                placeholder="Channel"
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
        <Button variant="danger" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        // <div id = "create-channel">
        //     <form onSubmit={handleSubmit}>
        //         <input onChange={()=>setName(e.target.value)} type="text" value={name}/>
        //     </form>
            
        // </div>
    )
}

export default CreateChannel