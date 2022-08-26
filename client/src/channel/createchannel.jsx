import { useState } from "react"
import { Modal,Button,Form } from "react-bootstrap"

// import { useNavigate } from "react-router-dom"

const header = {
    method: "POST",
    headers: {"Content-type": "application/json"}
}

function CreateChannel({show,onHide,handleAddChannel,modalData=""}) {
    // const navigate = useNavigate()
    console.log(modalData)
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
        if (modalData === "channel") {
          fetch("/channels",{...header,body:JSON.stringify({name})}).then(resp=>resp.json()).then(handleAddChannel)
        }

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
            Create {modalData}
          </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{modalData === "channel" ? "Create Channel" : "Send to Username"} </Form.Label>
              <Form.Control onChange={(e)=>setName(e.target.value)}
                type="text"
                placeholder={modalData}
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