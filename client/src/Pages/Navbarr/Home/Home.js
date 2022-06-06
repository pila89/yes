import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

function Home() {
    const dispatch = useDispatch();
   
  return (
    <div className='zoro'>
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.caradisiac.com/images/0/1/4/3/180143/S1-plus-belle-voiture-de-l-annee-voici-les-six-modeles-en-competition-613094.jpg" />
    <Card.Body>
    <Card.Title>Mercedes</Card.Title>
    <Card.Text>
      The first Car
    </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem>2022</ListGroupItem>
    </ListGroup>
    <Card.Body>
    <Card.Link href="#">Card Link</Card.Link> 
    </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.caradisiac.com/images/0/1/4/3/180143/S1-plus-belle-voiture-de-l-annee-voici-les-six-modeles-en-competition-613094.jpg" />
    <Card.Body>
    <Card.Title>Mercedes</Card.Title>
    <Card.Text>
      The first Car
    </Card.Text>
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

export default Home