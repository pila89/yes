import React from 'react'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

 function Usercard ({user}) {

  return (
  <div>
<Card style={{ width: "18rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>fullName:{user.fullName}</Card.Title>
              <Card.Title>address:{user.address}</Card.Title>
              <Card.Title>phone:{user.phone}</Card.Title>
              <Card.Title>email:{user.email}</Card.Title>
              <Card.Title>pwd:{user.pwd}</Card.Title>
              <Card.Title>image:{user.image}</Card.Title>
              <Card.Title>role:{user.role}</Card.Title>

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
export default Usercard;