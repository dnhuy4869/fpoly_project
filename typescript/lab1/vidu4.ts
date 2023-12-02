let arr:string[] = [
    'Tôi về tìm lại tuổi thơ',
    'Tìm trong câu hát ầu ơ ví dầu',
    'Tìm về đồng ruộng nương dâu',
    'Dòng sông bến nước cây cầu gốc đa'
];

let divTho = document.getElementById('divTho') as HTMLElement;
if (divTho) 
    arr.forEach( t => divTho.innerHTML +=`<p> `+ t  + `</p>`);
else 
    alert('Không biết nơi nào hiện kết quả bồ ơi');