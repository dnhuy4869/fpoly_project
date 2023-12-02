type hinhdep = {
    id: number;
    ten: string;
    url: string;
    mota: string;
}

let arr_hinh: hinhdep[];

fetch("http://localhost:3000/hinh")
    .then(res => res.json())
    .then(data => {
        arr_hinh = data as hinhdep[];
        console.log(arr_hinh);

        const sanpham2 = document.getElementById("sanpham") as HTMLDivElement;
        let htmlSp = ``;

        arr_hinh.forEach((sp) => {
            htmlSp += ` <div class="card">
        <div class="card-desc">
            <img src="images/${sp.url}" />
        </div>
    </div>`;

            sanpham2.innerHTML = htmlSp;
        })
    })
    .catch(e => console.log(e))







