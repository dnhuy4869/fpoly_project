var arr = [
    'Tôi về tìm lại tuổi thơ',
    'Tìm trong câu hát ầu ơ ví dầu',
    'Tìm về đồng ruộng nương dâu',
    'Dòng sông bến nước cây cầu gốc đa'
];
var divTho = document.getElementById('divTho');
if (divTho)
    arr.forEach(function (t) { return divTho.innerHTML += "<p> " + t + "</p>"; });
else
    alert('Không biết nơi nào hiện kết quả bồ ơi');
