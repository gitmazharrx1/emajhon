import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    let shipping = 0;
    for (const product of cart) {
        shipping = shipping + product.shipping;
    }
    const taxvalue = total * 0.1;

    const tax = taxvalue.toFixed(2);

    const grandTotal = parseInt(total) + parseInt(shipping) +parseFloat(tax);

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: {grandTotal}</h3>
        </div>
    );
};

export default Cart;