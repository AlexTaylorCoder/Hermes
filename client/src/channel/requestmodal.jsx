import { Modal, Button,Form } from "react-bootstrap";
import { useState } from "react";
const header = {
    method: "POST",
    headers: {"Content-type": "application/json"}
}
function RequestModal({show,onHide,member_id,channel_id}) {
    const [username,setUserName] = useState("")
    const [message,setMessage] = useState("")

    function handleSubmit() {
        onHide()
        fetch("/requests",{...header,body:JSON.stringify(
            {member_id,message,username,channel_id}
        )}).then(resp=>resp.json()).then(data=>console.log(data))

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
            Send Request
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Send to username</Form.Label>
              <Form.Control onChange={(e)=>setUserName(e.target.value)}
                type="text"
                placeholder="Enter username"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e)=>setMessage(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>Send</Button>  
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default RequestModal