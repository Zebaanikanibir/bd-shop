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

  fetch(`https://fast-island-71740.herokuapp.com/checkout/${id}`)
  .then(res => res.json())
  .then(data => setProduct(data))
    }, [id])
      

 const [loggedInUser, setLoggedInUser] = useContext(UserContext)
        const handleCheckOut = (product) =>{

        console.log('order sucessf', product)

        const newOrder = {...loggedInUser, ...product, orderTime: new Date().toDateString('dd/MM/yyyy')}

        console.log(loggedInUser)
        fetch('https://fast-island-71740.herokuapp.com/addOrder', {
        method:'POST',
        headers:{
        
            'Content-Type':'application/json'

        },
        body:JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {

            if(data){

                alert('order confirmed')
            }
        })
        }



    return (
        <div>
           
            <Container className="tablec">
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
                <td>${product.price}.00</td>
                </tr>
                <tr>
                <td>Total</td>
                <td>1</td>
                <td>${product.price}.00</td>
                </tr>
            </tbody>
            
            </Table>
            <Button onClick={()=>handleCheckOut(product)} variant="dark">Checkout</Button>
            </Container>
        </div>
    );
};

export default CheckOut;