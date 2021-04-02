import React from 'react';
import {Button, Card, Container, ListGroup, } from 'react-bootstrap';
import './OrderDetails.css';
const OrderDetails = (props) => {
    const {name, email, price, weight, orderTime} = props.order
    return (
        <Container className="mt-5">
            
            <Card style={{ width: '18rem' }}>
            <Card.Header id="cardHeader">Order Confirmed</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item id="list">Name:{name}</ListGroup.Item>
                <ListGroup.Item>Email:{email}</ListGroup.Item>
                <ListGroup.Item id="list1">Price:{price}</ListGroup.Item>
                <ListGroup.Item>Date: {orderTime}</ListGroup.Item>
            </ListGroup>
            </Card>
        </Container>
    );
};

export default OrderDetails;