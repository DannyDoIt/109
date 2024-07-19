const data = [
    {
        "title": "Banana",
        "price": 12.33,
        "category": "fruit",
        "image": "/images/banana.png",
        "_id": "1"
    },
    {
        "title": "Apple",
        "price": 8.99,
        "category": "fruit",
        "image": "/images/apple.png",
        "_id": "2"
    },
    {
        "title": "Orange",
        "price": 10.50,
        "category": "fruit",
        "image": "/images/orange.png",
        "_id": "3"
    }
];

export function getItems() {
    return data;
}
