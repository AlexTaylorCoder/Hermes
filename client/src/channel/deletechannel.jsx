import { Modal, Button,Form } from "react-bootstrap";
import { useState } from "react";
const header = {
    method: "DELETE",
    headers: {"Content-type": "application/json"}
}
function DeleteModal({show,onHide,name,id}) {
    const [channelName,setChannelName] = useState("")
    const [error,setError] = useState(false)

    function handleSubmit() {
        onHide()

        if (channelName === name) {
            fetch("/channels/"+id,header)
        }
        else {
            setError(true)
        }

        //   fetch("/channels",{...header,body:JSON.stringify({name})}).then(resp=>resp.json()).then(handleAddChannel)
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
            Delete Channel
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> { error ? <p>Incorrect Channel Name</p> : <p>Are you sure you want to delete {name}?</p>}</Form.Label>
              <Form.Control onChange={(e)=>setChannelName(e.target.value)}
                type="text"
                placeholder={name}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>  
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default DeleteModal