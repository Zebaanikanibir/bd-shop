import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Table, Button, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Manage.css';
const Manage = () => {
    const deleteProduct = (id) => {



        console.log(id)

        fetch(`https://fast-island-71740.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
            
        })
        .then(res => res.json())
        .then(result => {
           if (result){
            alert('successfully deleted')
           }
    
        })
    
            
        }



    const [products, setProducts] = useState([])
    

    useEffect(() => {
    fetch('https://fast-island-71740.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    }, [])
    return (
        <Container className="manage">
            <div className="leftBar">
            <h1 className="mt-5" id="brand">BD SHOP ❤</h1>
            <div id="link">
            <p><Link  to="/manage">↪Manage Product</Link></p>
            <p><Link  to="/addProducts">➕Add Product</Link></p>
            <p><Link  to="/Edit">✂Edit Ptoduct</Link></p>
            </div>
            </div>
            <div className="rightBar">
                
                     <div className="thead tHeader">
                         <h3>Name</h3>
                         <h3>Width</h3>
                         <h3>Price</h3>
                     </div>
                     <div className="thead">
                     <div>
                     {

                        products.map(product => <p className="name">{product.name}</p>)

                        }
                     </div>
                     <div>
                     {

                        products.map(product => <p className="name1">{product.weight}ml</p>)

                        }
                     </div>
                     <div>
                     {

                        products.map(product => <p>${product.price}-------<Button
                            onClick={()=>deleteProduct(product._id)}
                            variant="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button></p>)

                        }
                     </div>
                     </div>
                    
                    

            </div>
        </Container>
    );
};

export default Manage;