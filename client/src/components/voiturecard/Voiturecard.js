import React from 'react'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

 function Voiturecard ({voiture}) {

  return (
  <div>
<Card style={{ width: "18rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>marque:{voiture.marque}</Card.Title>
              <Card.Title>kilometrage:{voiture.kilometrage}</Card.Title>
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
export default Voiturecard;