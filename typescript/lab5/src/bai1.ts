interface INhaSX {
    idNSX: number;
    tenNSX: string;
}

interface IThuocTinh {
    tenTT: string;
    giaTri: string;
}

interface ISanPham {
    id: number,
    ten: string,
    gia: number,
    hinh?: string,
    mota?: string,
    nsx: INhaSX,
    thuocTinh: IThuocTinh[],
}

let sp1:ISanPham = {
    id: 12,
    ten:'Lenovo Ideapad 3 15IAU7',
    gia: 10990000,
    mota:`Laptop Lenovo Ideapad 3 15IAU7 i3 có kích thước màn hình 15.6 inch với độ phân giải Full HD giúp các chi tiết hiển thị trên màn hình được rõ ràng, sắc nét.`,
    hinh:'https://cdn.tgdd.vn/Products/Images/44/287769/Slider/vi-vn-lenovo-ideapad-3-15iau7-i3-82rk005lvn-1.jpg',
    nsx : {idNSX:1, tenNSX:'Lenovo'},
    thuocTinh: [
        { tenTT:'CPU', giaTri: 'i3 1215U1.2GHz'},
        { tenTT: 'RAM', giaTri:'8 GBDDR4 2 khe'},
        { tenTT: 'Ổ cứng', giaTri:'256 GB SSD NVMe'},
    ]
}

const spArr:ISanPham[] = [
    {
        id: 12,
        ten:'Lenovo Ideapad 3 15IAU7',
        gia: 10990000,
        mota:`Laptop Lenovo Ideapad 3 15IAU7 i3 có kích thước màn hình 15.6 inch với độ phân giải Full HD giúp các chi tiết hiển thị trên màn hình được rõ ràng, sắc nét.`,
        hinh:'https://cdn.tgdd.vn/Products/Images/44/287769/Slider/vi-vn-lenovo-ideapad-3-15iau7-i3-82rk005lvn-1.jpg',
        nsx : {idNSX:1, tenNSX:'Lenovo'},
        thuocTinh: [
            { tenTT:'CPU', giaTri: 'i3 1215U1.2GHz'},
            { tenTT: 'RAM', giaTri:'8 GBDDR4 2 khe'},
            { tenTT: 'Ổ cứng', giaTri:'256 GB SSD NVMe'},
        ]
    },
    {
        id: 12,
        ten:'Lenovo Ideapad 3 15IAU7',
        gia: 10990000,
        mota:`Laptop Lenovo Ideapad 3 15IAU7 i3 có kích thước màn hình 15.6 inch với độ phân giải Full HD giúp các chi tiết hiển thị trên màn hình được rõ ràng, sắc nét.`,
        hinh:'https://cdn.tgdd.vn/Products/Images/44/287769/Slider/vi-vn-lenovo-ideapad-3-15iau7-i3-82rk005lvn-1.jpg',
        nsx : {idNSX:1, tenNSX:'Lenovo'},
        thuocTinh: [
            { tenTT:'CPU', giaTri: 'i3 1215U1.2GHz'},
            { tenTT: 'RAM', giaTri:'8 GBDDR4 2 khe'},
            { tenTT: 'Ổ cứng', giaTri:'256 GB SSD NVMe'},
        ]
    },
    {
        id: 12,
        ten:'Lenovo Ideapad 3 15IAU7',
        gia: 10990000,
        mota:`Laptop Lenovo Ideapad 3 15IAU7 i3 có kích thước màn hình 15.6 inch với độ phân giải Full HD giúp các chi tiết hiển thị trên màn hình được rõ ràng, sắc nét.`,
        hinh:'https://cdn.tgdd.vn/Products/Images/44/287769/Slider/vi-vn-lenovo-ideapad-3-15iau7-i3-82rk005lvn-1.jpg',
        nsx : {idNSX:1, tenNSX:'Lenovo'},
        thuocTinh: [
            { tenTT:'CPU', giaTri: 'i3 1215U1.2GHz'},
            { tenTT: 'RAM', giaTri:'8 GBDDR4 2 khe'},
            { tenTT: 'Ổ cứng', giaTri:'256 GB SSD NVMe'},
        ]
    },
]

const sanpham = document.getElementById("sanpham") as HTMLDivElement;

let htmlCart = ``;

spArr.forEach((sp) => {
    htmlCart += `<div class="card">
    <img src=${sp.hinh}
        alt="">
    <div class="card-desc">
        <h2>${sp.ten}</h2>
        <p>Giá: ${sp.gia}</p>
        <p>Nhà sản xuất: ${sp.nsx.tenNSX}</p>
        <div class="">
            <p>${sp.thuocTinh[0].tenTT}: ${sp.thuocTinh[0].giaTri}</p>
            <p>${sp.thuocTinh[1].tenTT}: ${sp.thuocTinh[1].giaTri}</p>
            <p>${sp.thuocTinh[2].tenTT}: ${sp.thuocTinh[2].giaTri}</p>
        </div>
    </div>
</div>`;
})

sanpham.innerHTML = htmlCart;