import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './cart.css';

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart container mt-4">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul className="list-group">
                        {cart.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{item.title}</h5>
                                    <p className="cart-item-detail">Price: ${item.price.toFixed(2)}</p>
                                    <p className="cart-item-detail">Quantity: {item.quantity}</p>
                                    <p className="cart-item-detail">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="card mt-3">
                        <div className="card-body">
                            <h4 className="card-title">Total Cost</h4>
                            <p className="card-text">${totalCost.toFixed(2)}</p>
                            <button className="btn btn-success mt-3">Complete Purchase</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
