import React, { useState, useContext } from 'react';
import './product.css';
import QuantityPicker from './QuantityPicker';
import { CartContext } from '../contexts/CartContext';

function Product({ title, price, description, image, id }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const handleAddToCart = () => {
        addToCart({ id, title, price, quantity });
    };

    return (
        <div className="product card mb-3">
            <div className="image-container">
                <img src={image} className="card-img-top" alt={title} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Price: ${price.toFixed(2)}</p>
                <QuantityPicker quantity={quantity} onQuantityChange={handleQuantityChange} />
                <p className="card-text">Total: ${(price * quantity).toFixed(2)}</p>
                <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;
