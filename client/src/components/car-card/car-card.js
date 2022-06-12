import React from 'react'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

 function CarCard ({car}) {

  return (
  <div>
<Card style={{ width: "18rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>marque:{car.marque}</Card.Title>
              <Card.Title>kilometrage:{car.kilometrage}</Card.Title>
              <Card.Text>...</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>2022</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
  </div>
         )
}
export default CarCard;