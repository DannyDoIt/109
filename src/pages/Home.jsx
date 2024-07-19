import React from 'react';
import { Tab, Tabs, Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import './home.css';

const categories = {
    Fruit: [
        { title: "Apples", price: 1.00, description: "Fresh and juicy apples from Washington.", image: "/images/apple.png", id: "1" },
        { title: "Bananas", price: 0.50, description: "Sweet bananas sourced from Ecuador.", image: "/images/banana.png", id: "2" },
        { title: "Oranges", price: 0.75, description: "Citrus oranges from Florida.", image: "/images/orange.png", id: "3" },
        { title: "Peaches", price: 1.25, description: "Ripe peaches from Georgia.", image: "/images/peach.png", id: "4" },
        { title: "Strawberries", price: 2.00, description: "Sweet strawberries from California.", image: "/images/strawberry.png", id: "5" },
        { title: "Pineapples", price: 3.00, description: "Tropical pineapples from Hawaii.", image: "/images/pineapple.png", id: "6" }
    ],
    Vegetables: [
        { title: "Cucumbers", price: 0.75, description: "Crisp cucumbers from local farms.", image: "/images/cucumber.png", id: "7" },
        { title: "Lettuce", price: 1.00, description: "Fresh lettuce from local farms.", image: "/images/lettuce.png", id: "8" },
        { title: "Tomatoes", price: 1.50, description: "Ripe tomatoes from California.", image: "/images/tomato.png", id: "9" },
        { title: "Celery", price: 1.25, description: "Crunchy celery from local farms.", image: "/images/celery.png", id: "10" },
        { title: "Onions", price: 0.50, description: "Flavorful onions from Idaho.", image: "/images/onion.png", id: "11" },
        { title: "Carrots", price: 0.75, description: "Sweet carrots from local farms.", image: "/images/carrot.png", id: "12" }
    ],
    Bakery: [
        { title: "Sliced Bread", price: 2.00, description: "Freshly baked sliced bread.", image: "/images/bread.png", id: "13" },
        { title: "Baguette", price: 1.50, description: "Crispy French baguette.", image: "/images/baguette.png", id: "14" },
        { title: "Dinner Rolls", price: 3.00, description: "Soft and warm dinner rolls.", image: "/images/dinner_roll.png", id: "15" },
        { title: "Bagels", price: 4.00, description: "Delicious bagels with a variety of flavors.", image: "/images/bagel.png", id: "16" },
        { title: "Cakes", price: 10.00, description: "Decadent cakes for any occasion.", image: "/images/cake.png", id: "17" },
        { title: "Cookies", price: 5.00, description: "Freshly baked cookies.", image: "/images/cookie.png", id: "18" }
    ],
    Dairy: [
        { title: "Milk", price: 3.00, description: "Fresh milk from local dairy farms.", image: "/images/milk.png", id: "19" },
        { title: "Eggs", price: 2.50, description: "Organic eggs from free-range chickens.", image: "/images/eggs.png", id: "20" },
        { title: "Cheese", price: 5.00, description: "A variety of cheeses from local dairies.", image: "/images/cheese.png", id: "21" },
        { title: "Yogurt", price: 1.50, description: "Creamy yogurt with natural ingredients.", image: "/images/yogurt.png", id: "22" },
        { title: "Butter", price: 4.00, description: "Rich butter made from fresh cream.", image: "/images/butter.png", id: "23" },
        { title: "Whipped Cream", price: 3.50, description: "Light and fluffy whipped cream.", image: "/images/whipped_cream.png", id: "24" }
    ]
};

function Home() {
    return (
        <Container>
            <Tabs defaultActiveKey="Fruit" id="product-categories" className="justify-content-center">
                {Object.keys(categories).map(category => (
                    <Tab eventKey={category} title={category} key={category}>
                        <Row>
                            {categories[category].map(item => (
                                <Col key={item.id} sm={4}>
                                    <Product
                                        title={item.title}
                                        price={item.price}
                                        description={item.description}
                                        image={item.image}
                                        id={item.id}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Tab>
                ))}
            </Tabs>
        </Container>
    );
}

export default Home;
