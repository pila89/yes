import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../Redux/actions/voiture";

//recuperer les listes des voitures
function User() {
  const dispatch = useDispatch();

  const voitures = useSelector((state) => state.carReducer.voitures);
  console.log(voitures);
  useEffect(() => {
    dispatch(getCars());
  }, []);
  return (
    <div className="zoro">
      {voitures.map((el) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>marque:{el.marque}</Card.Title>
              <Card.Title>kilometrage:{el.kilometrage}</Card.Title>
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
      ))}
    </div>
  );
}

export default User;
