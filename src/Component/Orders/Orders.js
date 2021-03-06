import React, { useEffect, useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import { Container } from 'react-bootstrap';
import './Orders.css';
const Orders = () => {
    const [orders, setOrders] = useState([])
console.log(orders)

    useEffect(() => {
    fetch('https://fast-island-71740.herokuapp.com/orders')
    .then(res => res.json())
    .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h1 className="mt-5" id="brand">BD SHOP ❤</h1>
            <Container className="order">
             {

                orders.map(order => 
                    
                <OrderDetails order={order}></OrderDetails>
                )

                }
          </Container>
        </div>
    );
};

export default Orders;