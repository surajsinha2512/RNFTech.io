import React from 'react';
import {
  Card, Button
} from 'react-bootstrap';
import axios from 'axios';

const Cards = (props) => {

const sendRequest=()=>{

        // api call to send request
        axios.post('http://localhost:9999/send', {
         mail:props.mail
        }
      )
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }

const acceptRequest=()=>{
  /// api call  to accept request
    axios.post('http://localhost:9999/accept', {
        mail:props.mail
       }
     )
         .then(function (response) {
           console.log(response)
         })
         .catch(function (error) {
           console.log(error)
         })

}

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title> {`${props.firstName} ${props.lastName}`}</Card.Title>
      <Card.Text>
     {props.bio}
      </Card.Text>
      <Button variant="primary m-10" onClick={sendRequest}>Send Request</Button>
      <Button variant="primary" onClick={acceptRequest}>Accept </Button>
    </Card.Body>
  </Card>
  );
};            

export default Cards;