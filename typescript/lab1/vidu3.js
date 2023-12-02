var xuly = function () {
    var tensp = document.getElementById('tensp');
    var loai = document.getElementById('loai');
    var tt = document.forms[0].tt;
    var cn = document.getElementById('chongnuoc');
    var ct = document.getElementById('chongtrom');
    var mota = document.getElementById('mota');
    console.log("Tensp= ", tensp.value, " Loại= ", loai.value);
    console.log("Chống nước= ", cn.checked, " Chống trộm= ", ct.checked);
    console.log("Trạng thái= ", tt.value, " Mô tả= ", mota.value);
};
