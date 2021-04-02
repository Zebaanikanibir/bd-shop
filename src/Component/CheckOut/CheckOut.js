import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Table, Button, Container} from 'react-bootstrap';
import { UserContext } from '../../App';
import './CheckOut.css';
const CheckOut = () => {
    const { id } = useParams();
    console.log(id)
    const [product, setProduct] = useState({})
    useEffect(() =>{

  fetch(`http://localhost:5055/checkout/${id}`)
  .then(res => res.json())
  .then(data => setProduct(data))
    }, [id])
      

 const [loggedInUser, setLoggedInUser] = useContext(UserContext)
        const handleCheckOut = (product) =>{

        console.log('order sucessf', product)

        const newOrder = {...loggedInUser, ...product, orderTime: new Date().toDateString('dd/MM/yyyy')}

        console.log(loggedInUser)
        fetch('http://localhost:5055/addOrder', {
        method:'POST',
        headers:{
        
            'Content-Type':'application/json'

        },
        body:JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {

            if(data){

                alert('successfully')
            }
        })
        }



    return (
        <div>
           
            <Container className="mt-5">
            <Table id="table">
            <thead>
                <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{product.name}</td>
                <td>1</td>
                <td>${product.price}</td>
                </tr>
                <tr>
                <td>Total</td>
                <td>1</td>
                <td>${product.price}</td>
                </tr>
            </tbody>
            
            </Table>
            <Button onClick={()=>handleCheckOut(product)} variant="dark">Checkout</Button>
            </Container>
        </div>
    );
};

export default CheckOut;