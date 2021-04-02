import React from 'react';
import {Table, Button, Container} from 'react-bootstrap';
const ManageProducts = (props) => {
    const {name,price,weight} = props.product
    return (
        <div className="thead">
             <p>{name}</p>
             <p>{weight}</p>
             <p>{price}</p>
             <p>Action</p>  
        </div>
    );
};

export default ManageProducts;