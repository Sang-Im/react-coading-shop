import React from "react";
import { Card, Button } from "react-bootstrap";

function Jumbotron() {
  return (
    <div>
      <Card>
        <Card.Body className="background">
          <Card.Title>20% Season Off</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Jumbotron;
