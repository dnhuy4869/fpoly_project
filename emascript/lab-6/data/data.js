export const CATEGORIES = [
    {
        "id": 1,
        "name": "Fresh Meat",
        "img": "cat-1.jpg",
    },
    {
        "id": 2,
        "name": "Vegetables",
        "img": "cat-2.jpg",
    },
    {
        "id": 3,
        "name": "Nut Gifts",
        "img": "cat-3.jpg",
    },
    {
        "id": 4,
        "name": "Fresh Berries",
        "img": "cat-4.jpg",
    },
    {
        "id": 5,
        "name": "Ocean Foods",
        "img": "cat-5.jpg",
    },
    {
        "id": 6,
        "name": "Butter & Eggs",
        "img": "cat-1.jpg",
    },
    {
        "id": 7,
        "name": "Fastfood",
        "img": "cat-2.jpg",
    },
    {
        "id": 8,
        "name": "Fresh Onion",
        "img": "cat-3.jpg",
    },
    {
        "id": 9,
        "name": "Papayaya",
        "img": "cat-4.jpg",
    },
    {
        "id": 10,
        "name": "Oatmeal",
        "img": "cat-5.jpg",
    },
    {
        "id": 11,
        "name": "Fresh Bananas",
        "img": "cat-1.jpg",
    }, 
];

export const PRODUCTS = [
    {
        "id": 1,
        "idCategory": 5,
        "name": "Crab Pool Security",
        "img": "feature-1.jpg",
        "price": 30,
    },
    {
        "id": 2,
        "idCategory": 2,
        "name": "Crab Pool Security",
        "img": "feature-2.jpg",
        "price": 36,
    },
    {
        "id": 3,
        "idCategory": 5,
        "name": "Crab Pool Security",
        "img": "feature-3.jpg",
        "price": 36,
    },
    {
        "id": 4,
        "idCategory": 2,
        "name": "Crab Pool Security",
        "img": "feature-4.jpg",
        "price": 36,
    },
    {
        "id": 5,
        "idCategory": 4,
        "name": "Crab Pool Security",
        "img": "feature-5.jpg",
        "price": 36,
    },
    {
        "id": 6,
        "idCategory": 4,
        "name": "Crab Pool Security",
        "img": "feature-6.jpg",
        "price": 36,
    },
    {
        "id": 7,
        "idCategory": 4,
        "name": "Crab Pool Security",
        "img": "feature-7.jpg",
        "price": 36,
    },
    {
        "id": 8,
        "idCategory": 4,
        "name": "Crab Pool Security",
        "img": "feature-8.jpg",
        "price": 36,
    },
    {
        "id": 9,
        "idCategory": 1,
        "name": "Crab Pool Security",
        "img": "feature-1.jpg",
        "price": 30,
    },
    {
        "id": 10,
        "idCategory": 1,
        "name": "Crab Pool Security",
        "img": "feature-2.jpg",
        "price": 36,
    },
    {
        "id": 11,
        "idCategory": 1,
        "name": "Crab Pool Security",
        "img": "feature-3.jpg",
        "price": 36,
    },
    {
        "id": 12,
        "idCategory": 1,
        "name": "Crab Pool Security",
        "img": "feature-4.jpg",
        "price": 36,
    },
];

export const loadTopbarCategories = () => {
    const topbar = document.getElementById("topbarCategories");

    let data = "";

    CATEGORIES.forEach((item, index) => {
        if (index < 11) {
            data += `<li><a href="#">${item.name}</a></li>`;
        } 
    })

    topbar.innerHTML = data;
}