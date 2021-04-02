import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';
import { Link } from 'react-router-dom';
import { Container, ListGroup, Form } from 'react-bootstrap';
const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();

     const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const eventData = {
        name:data.name,
        imageURL: imageURL,
        price:data.price,
        weight:data.weight
        }
        const url = `http://localhost:5055/addProducts`
        console.log(eventData)

        fetch(url, {

        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    };


    const handleImageUpload = event =>{
    console.log(event.target.files[0])
    const imageData = new FormData()
    imageData.set('key','490603be0b2b864cf04e99aa7ef5f737')
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
    imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      }); 
      event.preventDefault()



    }
    return (
        <Container className="addProducts">
            <div className="leftBar">
            <h1 className="mt-5" id="brand">BD SHOP ❤</h1>
            <div id="link">
            <p><Link  to="/manage">↪Manage Product</Link></p>
            <p><Link  to="/addProducts">➕Add Product</Link></p>
            <p><Link  to="/Edit">✂Edit Ptoduct</Link></p>
            </div>
            </div>
            <div className="rightBar mt-5">
            <h1 id="formHeader">Add Products</h1>
            <Form onSubmit={handleSubmit(onSubmit)} className="form-control" className="Fullform">
            <div>
            <Form.Label>Product Name</Form.Label>
            <Form.Control className="form-control " name="name" defaultValue="Product Name" ref={register} />
            <Form.Label>Product Weight</Form.Label>
             <Form.Control className="form-control " type="number" name="weight" ref={register}/>
            </div>
            <div>
            <Form.Label>Add Price</Form.Label>
            <Form.Control className="form-control " name="price" defaultValue="Price" type="number" ref={register} />
             <Form.Label>Upload Photo</Form.Label>
            <Form.Control className="form-control "  name="exampleRequired" type="file" onChange={handleImageUpload} />
            </div>
            <Form.Control className="form-control" type="submit" id="submit"/>
            </Form>
            </div>
        </Container>
    );
};

export default AddProducts;