import React from 'react';
import {
  Card, Button
} from 'react-bootstrap';

const Cards = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Name</Card.Title>
      <Card.Text>
      {`${props.firstName} ${props.lastName}`}
      </Card.Text>
      <Button variant="primary m-10">Send Request</Button>
      <Button variant="primary">Accept </Button>
    </Card.Body>
  </Card>
  );
};

export default Cards;