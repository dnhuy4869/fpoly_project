// Hien hinh anh
type hinhdep = {
    id: number;
    ten: string;
    url: string;
    mota: string;
}

let arr_hinh: hinhdep[];

let arr_nguoichoi: nguoichoi[];

const arrImagesData: any[] = [];
let selectedCount = 0;
let currName: string = "";
let currScore: number = 0;

const setScore = (diem: number): void => {
    currScore = diem;
    const hoten = document.getElementById("diem") as HTMLElement;
    hoten.innerText = `Điểm: ${diem}`;
}

const submitResultToServer = async () => {
    const data = {
        id: arr_nguoichoi.length + 1,
        hoten: currName,
        diem: currScore,
        thoidiem: new Date().toLocaleString(),
    }

    await fetch("http://localhost:3000/choi", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
    })
    .catch(e => console.log(e)) 
}

const flipHandler = (currDiv: any): Boolean => {
    arrImagesData.forEach(async (div: any, index: any) => {
        if (div.id !== currDiv.id
            && div.selected) {
            let imgDiv = div.children.item(0) as HTMLImageElement;
            let currImgDiv = currDiv.children.item(0) as HTMLImageElement;
            if (imgDiv.src === currImgDiv.src) {
                //console.log(`same source ${imgDiv.src}`);

                div.isFlipped = true;
                currDiv.isFlipped = true;
                div.selected = false;
                currDiv.selected = false;

                setScore(currScore += 3);

                if (arrImagesData.filter(e => e.isFlipped === true).length >= arrImagesData.length) {
                    await new Promise(f => setTimeout(f, 1000));

                    await submitResultToServer();

                    alert("Bạn đã thắng, mời chơi lại");
                    logout();
                }

                return true;
            }
            else {
                await new Promise(f => setTimeout(f, 1000));

                setScore(currScore -= 1);

                div.isFlipped = false;
                currDiv.isFlipped = false;
                div.selected = false;
                currDiv.selected = false;

                imgDiv.className = 'an';
                currImgDiv.className = 'an';

                if (currScore <= -10) {

                    await submitResultToServer();

                    alert("Bạn đã thua, mời chơi lại");
                    logout();
                }
            }
        }
    });

    return false;
}

const logout = (): void => {
    const game = document.getElementById("game") as HTMLElement;
    const login = document.getElementById("login") as HTMLElement;

    login.style.display = "flex";
    game.style.display = "none";

    const divHinhDep = document.getElementById("divhinhdep");
    divHinhDep.innerHTML = ``;

    setScore(0);
}

const setupImagesClick = (): any => {
    const mainDiv = document.getElementById("divhinhdep");

    for (var i = 0; i < mainDiv.children.length; i++) {
        arrImagesData.push(mainDiv.children[i]);
        arrImagesData[i].selected = false;
        arrImagesData[i].isFlipped = false;
    }

    //console.log(arrImagesData);

    arrImagesData.forEach((div: any, index: any) => {
        div.children.item(0).className = 'an';

        let img = div.children.item(0) as HTMLImageElement;
        div.onclick = async () => {

            if (selectedCount > 2 || selectedCount < 0) {
                selectedCount = 0;
            }

            if (img.className == 'an') {
                img.className = 'hien';
                div.selected = true;
                selectedCount += 1;
            }
            else {
                if (!div.isFlipped) {
                    img.className = 'an';
                    selectedCount -= 1;
                }
            }

            if (selectedCount >= 2) {
                flipHandler(div);
                selectedCount = 0;
            }

            //console.log(selectedCount);
        }
    })
}

const loadImagesData = async (): Promise<any> => {
    // arr_hinh = [
    //     { id: 1, ten: 'Hoa lan', url: 'lan.jpg', mota: 'Lan có mùi thơm dễ chịu, sang trọng, tao nhã' },
    //     { id: 2, ten: 'Anh đào', url: 'anhdao.jpg', mota: 'Hoa mỏng manh, tượng trưng cho sắc đẹp và tinh khiết' },
    //     { id: 3, ten: 'Thiên điểu', url: 'thiendieu.jpg', mota: 'Hoa có dạng chú chim đầy màu sắc' },
    //     { id: 4, ten: 'Hoa tigon', url: 'tigon.jpg', mota: 'Hoa màu hồng, cánh mỏng manh.Mọc thành từng chùm.' },
    //     { id: 5, ten: 'Thược dược', url: 'thuocduoc.jpg', mota: 'Hoa có nhiều màu, đẹp ngất ngây lòng người,' },
    //     { id: 6, ten: 'Cẩm tú cầu', url: 'camtucau.jpg', mota: 'Đẹp trang nhã, nhẹ nhàng. Sống lâu năm' },
    //     { id: 7, ten: 'Hoa lan', url: 'lan.jpg', mota: 'Lan có mùi thơm dễ chịu, sang trọng, tao nhã' },
    //     { id: 8, ten: 'Anh đào', url: 'anhdao.jpg', mota: 'Hoa mỏng manh, tượng trưng cho sắc đẹp và tinh khiết' },
    //     { id: 9, ten: 'Thiên điểu', url: 'thiendieu.jpg', mota: 'Hoa có dạng chú chim đầy màu sắc' },
    //     { id: 10, ten: 'Hoa tigon', url: 'tigon.jpg', mota: 'Hoa màu hồng, cánh mỏng manh.Mọc thành từng chùm.' },
    //     { id: 11, ten: 'Thược dược', url: 'thuocduoc.jpg', mota: 'Hoa có nhiều màu, đẹp ngất ngây lòng người,' },
    //     { id: 12, ten: 'Cẩm tú cầu', url: 'camtucau.jpg', mota: 'Đẹp trang nhã, nhẹ nhàng. Sống lâu năm' },
    // ];

    await fetch("http://localhost:3000/hinh")
        .then(res => res.json())
        .then(data => {
            arr_hinh = data as hinhdep[];
            console.log(arr_hinh);
        })
        .catch(e => console.log(e))

    const divHinhDep = document.getElementById("divhinhdep");
    let hien1hinh = (h: hinhdep): void => {
        divHinhDep.innerHTML += `
            <div class="hinh" id="${h.id}">
                <img src="/public/images/${h.url}" title='${h.mota}' />
            </div>
        `;
    }

    const arr_hinh1: hinhdep[] = arr_hinh.sort((a, b) => 0.5 - Math.random());
    arr_hinh1.forEach(hien1hinh);

    setupImagesClick();
}

// login handler
const loginForm = document.getElementById("login-form");
loginForm.onsubmit = (e) => {
    e.preventDefault();

    const name = document.getElementsByName("name")[0] as HTMLInputElement;

    const game = document.getElementById("game") as HTMLElement;
    const login = document.getElementById("login") as HTMLElement;

    login.style.display = "none";
    game.style.display = "block";

    const hoten = document.getElementById("hoten") as HTMLElement;
    hoten.innerText = name.value;

    currName = name.value;

    setScore(0);

    loadImagesData();
}

const btnLogout = document.getElementById("logout");
btnLogout.onclick = (e) => {
    logout();
}

type nguoichoi = {
    id: number,
    hoten: string;
    diem: number;
    thoidiem: string;
}

const loadHistoryData = async () => {
    await fetch("http://localhost:3000/choi")
        .then(res => res.json())
        .then(data => {
            arr_nguoichoi = data as nguoichoi[];
            console.log(arr_nguoichoi);
        })
        .catch(e => console.log(e))

    const nguoichoi = document.getElementById("nguoichoi");
    arr_nguoichoi.forEach((h: nguoichoi): void => {
        nguoichoi.innerHTML += `
        <li>${h.hoten} | ${h.diem} điểm | ${h.thoidiem}</li>
        `;
    })
}

loadHistoryData();