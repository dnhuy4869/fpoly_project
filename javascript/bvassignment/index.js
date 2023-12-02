// tao class
class SinhVien
{
    constructor() {
        this.masv = "";
        this.tensv = "";
        this.diem = 0;
    }

    get getMaSv() {
        return this.masv;
    }

    set setMaSv(value) {
        this.masv = value;
    }

    get getTenSv() {
        return this.tensv;
    }

    set setTenSv(value) {
        this.tensv = value;
    }

    get getDiem() {
        return this.diem;
    }

    set setDiem(value) {
        this.diem = value;
    }

    xuat() {
        console.log(`tensv: ${this.tensv}`);
        console.log(`masv: ${this.masv}`);
        console.log(`diem: ${this.diem}`);
    }
}

const sv1 = new SinhVien("huy", "234", 5.0);
sv1.xuat();

// 1
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2
arrNumbers.splice(5, 0, ...[3, 10]);
console.log(arrNumbers);

// 3
arrNumbers.splice(8, 1);
console.log(arrNumbers);

// 4
const index = (arrNumbers.length - 1) / 2;
//console.log(index);
const middleValue = arrNumbers[index];
//console.log(middleValue);

const newArr = arrNumbers.filter((item, index) => {
    return item > middleValue;
})
console.log(newArr);

// cau 4
 function getJSON() {
    return fetch('https://fakestoreapi.com/products?limit=10')
        .then((response)=>response.json())
        .then((responseJson)=> { return responseJson });
}

const handleData = async () => {
    const jsonData = await getJSON();
    console.log(jsonData);

    // cau 5
    let electronics = 0;
    let jewelery = 0;
    jsonData.forEach((item, index) => {
        if (item.category === "electronics") {
            electronics += item.rating.count;
        }
        else if (item.category === "jewelery") {
            jewelery += item.rating.count;
        }
    })

    console.log(`electronics: ${electronics}`);
    console.log(`jewelery: ${jewelery}`);

    // cau 6
    jsonData.forEach((item, index) => {
        if (item.price > 100) {
            item.discount = 30;
        }
    })
    console.log(jsonData);
}

handleData();

const loadProduct = async () => {
    const products = document.getElementById("products");

    let data = ``;

    const jsonData = await getJSON();
    const newArr = jsonData.map((item, index) => {
        return `<div class="col-md-6 col-lg-4 col-xl-3">
        <div id="product-1" class="single-product">
            <div class="part-2">
                <img src="${item.image}" style="width: 300px;"/>
                <h3 class="product-title">${item.title}</h3>
                <h4 class="product-price">$${item.price}</h4>
            </div>
        </div>
    </div>`;
    });
    console.log(newArr);

    products.innerHTML = data;
}

loadProduct();
