import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BookingSuccessful = (props) => {
  const { busId, passengerName, passengerAge, passengerGender, seatNumber, bookingDate } = props;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto">
          <h2>Booking Successful</h2>
          <p>Your booking has been successfully processed.</p>
          <p>Bus ID: {busId}</p>
          <p>Passenger Name: {passengerName}</p>
          <p>Passenger Age: {passengerAge}</p>
          <p>Passenger Gender: {passengerGender}</p>
          <p>Seat Number: {seatNumber}</p>
          <p>Booking Date: {bookingDate}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default BookingSuccessful;