import React, { useState, useEffect } from 'react';
import './quantityPicker.css';

function QuantityPicker({ quantity, onQuantityChange }) {
    const [localQuantity, setLocalQuantity] = useState(quantity || 1);

    useEffect(() => {
        if (quantity !== undefined) {
            setLocalQuantity(quantity);
        }
    }, [quantity]);

    const decrease = () => {
        if (localQuantity > 1) {
            const newQuantity = localQuantity - 1;
            setLocalQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    const increase = () => {
        const newQuantity = localQuantity + 1;
        setLocalQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    return (
        <div className="qt-picker">
            <button disabled={localQuantity === 1} onClick={decrease}>-</button>
            <label>{localQuantity}</label>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
