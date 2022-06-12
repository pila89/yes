import React, { useState } from "react";
import { Button, Card, Dropdown, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteCar } from "../../Redux/actions/car";
import { Link } from "react-router-dom";

function CarCard({ car }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Actions
            </Dropdown.Toggle>
            <Dropdown.Menu>

              <Link id="RouterNavLink"  to={`/editCar/${car._id}`}>Edit</Link>
                <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item onClick={handleShow}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Card.Body>
          <Card.Title>marque:{car.marque}</Card.Title>
          <Card.Title>kilometrage:{car.kilometrage}</Card.Title>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete CAR</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete the selected car? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(deleteCar(car._id))}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default CarCard;
