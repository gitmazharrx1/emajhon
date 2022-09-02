import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
    const {handleAddToCart} = props;
    const {id,name,price,img,seller,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p className='font'>{name}</p>
            <p>Price : ${price}</p>
            <p>Manufacture : {seller}</p>
            <p>Rating : {ratings}</p>
            </div>
            <button className='btn-cart' onClick={ () => props.handleAddToCart(props.product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;