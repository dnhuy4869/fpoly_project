const banners = [
    {
        "left": [],
        "right": []
    },
];

const imgData = [
    { 
        "img": "img/1.jpg",
        "position": "left",
    },
    { 
        "img": "img/2.jpg",
        "position": "left",
    },
    { 
        "img": "img/3.jpg",
        "position": "right",
    },
    { 
        "img": "img/4.jpg",
        "position": "right",
    },
    { 
        "img": "img/5.jpg",
        "position": "right",
    },
    { 
        "img": "img/6.jpg",
        "position": "right",
    },
];

function loadLeftCol() {
    let left = document.getElementById("carousel-left");
    let data = ``;

    const leftBanners = imgData.filter((item) => {
        return item.position === "left";
    })

    leftBanners.forEach((item) => {
        banners[0].left.push(item);
    });

    console.log(leftBanners);

    leftBanners.forEach((item, index) => {
        data += ` <div class="carousel-item ${index === 0 ? "active" : null}">`;
        data += ` <img src="${item.img}" alt="">`;
        data += `</div>`;
    });

    left.innerHTML = data;
}

function loadRightCol() {
    let right = document.getElementById("right");
    let data1 = ``;
    let data2 = ``;

    const rightBanners = imgData.filter((item) => {
        return item.position === "right";
    })

    rightBanners.forEach((item) => {
        banners[0].right.push(item);
    });
    
    let rightColData = banners[0].right.sort( () => Math.random() - 0.5);

    data1 += `<div class="img-wrapper">`;
    rightColData.forEach((item, index) => {
        if (index <= 1) {
            data1 += ` <img src="${item.img}" alt="">`;
        }
    });
    data1 += `</div>`;

    data2 += `<div class="img-wrapper">`;
    rightColData.forEach((item, index) => {
        if (index > 1) {
            data2 += ` <img src="${item.img}" alt="">`;
        }
    });
    data2 += `</div>`;

    let data = data1 + data2;

    right.innerHTML = data;
}

loadLeftCol();
loadRightCol();