import React, { useState } from 'react';
import './admin.css';

function Admin() {
    const [product, setProduct] = useState({
        title: '',
        image: '',
        price: '',
        category: ''
    });

    const handleProductChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const saveProduct = (e) => {
        e.preventDefault();
        console.log('Product saved:', product);
    };

    return (
        <div className="admin">
            <h1>Admin Page</h1>
            <form className="product-form" onSubmit={saveProduct}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        className="form-control" 
                        onBlur={handleProductChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input 
                        type="text" 
                        name="image" 
                        className="form-control" 
                        onBlur={handleProductChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input 
                        type="number" 
                        name="price" 
                        className="form-control" 
                        onBlur={handleProductChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input 
                        type="text" 
                        name="category" 
                        className="form-control" 
                        onBlur={handleProductChange} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Product</button>
            </form>
        </div>
    );
}

export default Admin;
