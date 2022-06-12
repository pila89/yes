import React, { useEffect, useState } from 'react'
import { Button, Card, Dropdown, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../Redux/actions/user';

 function Usercard ({user}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteUser())
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
           Actions
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-2" onClick={handleShow}>Delete </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <Card.Body>
          <Card.Title>fullName:{user.fullName}</Card.Title>
          <Card.Title>address:{user.address}</Card.Title>
          <Card.Title>phone:{user.phone}</Card.Title>
          <Card.Title>email:{user.email}</Card.Title>
          <Card.Title>pwd:{user.pwd}</Card.Title>
          <Card.Title>image:{user.image}</Card.Title>
          <Card.Title>role:{user.role}</Card.Title>
        </Card.Body> 
      </Card>
      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete the selected user? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>dispatch(deleteUser(user._id))}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Usercard;