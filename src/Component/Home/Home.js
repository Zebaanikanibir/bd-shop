import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import {Nav, Navbar, Container, Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {

    const [products, setProducts] = useState([])

    
    useEffect(() => {
    fetch('http://localhost:5055/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    }, [])

    

    return (
        <Container>
            <Navbar id="navbar" expand="lg">
            <Navbar.Brand href="#home" id="brand">BD SHOP ❤</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
            </Nav>
            <Nav>
            <Link className="link"  to="/home">Home</Link>
            <Link className="link"  to="/addProducts">Admin</Link>
            <Link className="link" to="/orders">Orders</Link>
            <Link className="link"  to="/deals">Deals</Link>
            <Link className="link" id="login" to="/features"><Link to="/login">Login</Link></Link>
            </Nav>
            </Navbar.Collapse>
           </Navbar>
          
             <div className="home mt-5">
                {

                products.map(product => <Products product={product}></Products>)

                }
             </div>
             
         </Container>
       
    );
};

export default Home;