import React from 'react';
import Category from '../components/Category';
import './catalog.css';

const categories = {
    Fruit: [
        { "title": "Apples", "price": 1.00, "category": "Fruit", "image": "/images/apple.png", "_id": "1" },
        { "title": "Bananas", "price": 0.50, "category": "Fruit", "image": "/images/banana.png", "_id": "2" },
        { "title": "Oranges", "price": 0.75, "category": "Fruit", "image": "/images/orange.png", "_id": "3" },
        { "title": "Peaches", "price": 1.25, "category": "Fruit", "image": "/images/peach.png", "_id": "4" },
        { "title": "Strawberries", "price": 2.00, "category": "Fruit", "image": "/images/strawberry.png", "_id": "5" },
        { "title": "Pineapples", "price": 3.00, "category": "Fruit", "image": "/images/pineapple.png", "_id": "6" }
    ],
    Vegetables: [
        { "title": "Cucumbers", "price": 0.75, "category": "Vegetables", "image": "/images/cucumber.png", "_id": "7" },
        { "title": "Lettuce", "price": 1.00, "category": "Vegetables", "image": "/images/lettuce.png", "_id": "8" },
        { "title": "Tomatoes", "price": 1.50, "category": "Vegetables", "image": "/images/tomato.png", "_id": "9" },
        { "title": "Celery", "price": 1.25, "category": "Vegetables", "image": "/images/celery.png", "_id": "10" },
        { "title": "Onions", "price": 0.50, "category": "Vegetables", "image": "/images/onion.png", "_id": "11" },
        { "title": "Carrots", "price": 0.75, "category": "Vegetables", "image": "/images/carrot.png", "_id": "12" }
    ],
    Bakery: [
        { "title": "Sliced Bread", "price": 2.00, "category": "Bakery", "image": "/images/bread.png", "_id": "13" },
        { "title": "Baguette", "price": 1.50, "category": "Bakery", "image": "/images/baguette.png", "_id": "14" },
        { "title": "Dinner Rolls", "price": 3.00, "category": "Bakery", "image": "/images/dinner_roll.png", "_id": "15" },
        { "title": "Bagels", "price": 4.00, "category": "Bakery", "image": "/images/bagel.png", "_id": "16" },
        { "title": "Cakes", "price": 10.00, "category": "Bakery", "image": "/images/cake.png", "_id": "17" },
        { "title": "Cookies", "price": 5.00, "category": "Bakery", "image": "/images/cookie.png", "_id": "18" }
    ],
    Dairy: [
        { "title": "Milk", "price": 3.00, "category": "Dairy", "image": "/images/milk.png", "_id": "19" },
        { "title": "Eggs", "price": 2.50, "category": "Dairy", "image": "/images/eggs.png", "_id": "20" },
        { "title": "Cheese", "price": 5.00, "category": "Dairy", "image": "/images/cheese.png", "_id": "21" },
        { "title": "Yogurt", "price": 1.50, "category": "Dairy", "image": "/images/yogurt.png", "_id": "22" },
        { "title": "Butter", "price": 4.00, "category": "Dairy", "image": "/images/butter.png", "_id": "23" },
        { "title": "Whipped Cream", "price": 3.50, "category": "Dairy", "image": "/images/whipped_cream.png", "_id": "24" }
    ]
};

function Catalog() {
    return (
        <div className="catalog container mt-4">
            {Object.keys(categories).map(category => (
                <Category 
                    key={category} 
                    title={category} 
                    items={categories[category]} 
                />
            ))}
        </div>
    );
}

export default Catalog;
