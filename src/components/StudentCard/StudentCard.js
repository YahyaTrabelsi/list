import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentCard = ({ student }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={student.photo} />
        <Card.Body>
          <Card.Title>{student.firstName}</Card.Title>
          <Card.Text>{student.lastName}</Card.Text>
          <Link to={`/studentdetails/${student.id}`}>
            <Button variant="primary">Show More details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentCard;
