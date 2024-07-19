
import React from 'react';
import '../components/Category.css';
import Product from './Product';

function Category({ title, items }) {
    return (
        <div className="category">
            <h2 className="category-title">{title}</h2>
            <div className="category-items">
                {items.map(item => (
                    <Product
                        key={item._id}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Category;
