import React from 'react';
import {Button, Card, Container} from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import './Product.css';
const Products = (props) => {
        const {name, price, key,imageURL, _id, weight} = props.product
 const history = useHistory()

    const handleCheckOut = (id) => {

    history.push(`/checkout/${id}`)

    }
    return (
        <Container className="mt-5">
            <div className="box">
            <Card style={{ width: '18rem', height:'400px' }}>
            <img style={{height: '250px'}} src={imageURL} alt=""/>
            <Card.Body>
                <Card.Text>
                <h3>{name}-{weight}ml</h3>
                </Card.Text>
                <div className="click">
                <h2>${price}</h2>
                <Button onClick={()=>handleCheckOut(_id)} variant="info">
                 Buy Now
                </Button>
                </div>
            </Card.Body>
            </Card>
            </div>


             {/* <div className="col-md-3">
            <img style={{height: '300px'}} src={imageURL} alt=""/>
            <h3>{name}-{weight}ml</h3>
            <h2>${price}</h2> */}
            
        </Container>
    );
};

export default Products;