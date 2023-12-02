let arr_hinh;
let arr_nguoichoi;
const arrImagesData = [];
let selectedCount = 0;
let currName = "";
let currScore = 0;
const setScore = (diem) => {
    currScore = diem;
    const hoten = document.getElementById("diem");
    hoten.innerText = `Điểm: ${diem}`;
};
const submitResultToServer = async () => {
    const data = {
        id: arr_nguoichoi.length + 1,
        hoten: currName,
        diem: currScore,
        thoidiem: new Date().toLocaleString(),
    };
    await fetch("http://localhost:3000/choi", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
    })
        .catch(e => console.log(e));
};
const flipHandler = (currDiv) => {
    arrImagesData.forEach(async (div, index) => {
        if (div.id !== currDiv.id
            && div.selected) {
            let imgDiv = div.children.item(0);
            let currImgDiv = currDiv.children.item(0);
            if (imgDiv.src === currImgDiv.src) {
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
};
const logout = () => {
    const game = document.getElementById("game");
    const login = document.getElementById("login");
    login.style.display = "flex";
    game.style.display = "none";
    const divHinhDep = document.getElementById("divhinhdep");
    divHinhDep.innerHTML = ``;
    setScore(0);
};
const setupImagesClick = () => {
    const mainDiv = document.getElementById("divhinhdep");
    for (var i = 0; i < mainDiv.children.length; i++) {
        arrImagesData.push(mainDiv.children[i]);
        arrImagesData[i].selected = false;
        arrImagesData[i].isFlipped = false;
    }
    arrImagesData.forEach((div, index) => {
        div.children.item(0).className = 'an';
        let img = div.children.item(0);
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
        };
    });
};
const loadImagesData = async () => {
    await fetch("http://localhost:3000/hinh")
        .then(res => res.json())
        .then(data => {
        arr_hinh = data;
        console.log(arr_hinh);
    })
        .catch(e => console.log(e));
    const divHinhDep = document.getElementById("divhinhdep");
    let hien1hinh = (h) => {
        divHinhDep.innerHTML += `
            <div class="hinh" id="${h.id}">
                <img src="/public/images/${h.url}" title='${h.mota}' />
            </div>
        `;
    };
    const arr_hinh1 = arr_hinh.sort((a, b) => 0.5 - Math.random());
    arr_hinh1.forEach(hien1hinh);
    setupImagesClick();
};
const loginForm = document.getElementById("login-form");
loginForm.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementsByName("name")[0];
    const game = document.getElementById("game");
    const login = document.getElementById("login");
    login.style.display = "none";
    game.style.display = "block";
    const hoten = document.getElementById("hoten");
    hoten.innerText = name.value;
    currName = name.value;
    setScore(0);
    loadImagesData();
};
const btnLogout = document.getElementById("logout");
btnLogout.onclick = (e) => {
    logout();
};
const loadHistoryData = async () => {
    await fetch("http://localhost:3000/choi")
        .then(res => res.json())
        .then(data => {
        arr_nguoichoi = data;
        console.log(arr_nguoichoi);
    })
        .catch(e => console.log(e));
    const nguoichoi = document.getElementById("nguoichoi");
    arr_nguoichoi.forEach((h) => {
        nguoichoi.innerHTML += `
        <li>${h.hoten} | ${h.diem} điểm | ${h.thoidiem}</li>
        `;
    });
};
loadHistoryData();
