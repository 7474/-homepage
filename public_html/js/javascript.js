
// 右クリック禁止
window.oncontextmenu = function () {
    alert("右クリックは禁止です！");
    return false;
}

// マウス追跡
// XXX 90年代にどういうコードが書かれていたのか分からない
var mt_elements = ["img/m1.png", "img/m1.png", "img/m1.png", "img/m1.png", "img/m1.png"]
    .map(path => {
        var e = document.createElement("img");
        e.style.position = "fixed";
        e.setAttribute("src", path);
        e.setAttribute("width", 32);
        e.setAttribute("height", 16);
        return e;
    });
var mt_pos = [];
var mt_last_pos;
window.onload = function () {
    mt_elements.map(e => document.body.appendChild(e));
    setInterval(function () {
        if (mt_last_pos) { mt_pos.push(mt_last_pos); };
        while (mt_pos.length > mt_elements.length) { mt_pos.shift(); }
        for (var i = 0; i < mt_pos.length; i++) {
            // 少しずらしてクリックを邪魔しないようにしておく（本当にそれでいいのか？？？）
            mt_elements[i].style.top = mt_pos[i].clientY + 4;
            mt_elements[i].style.left = mt_pos[i].clientX + 4;
        }
    }, 100);
}
window.onmousemove = function (e) {
    mt_last_pos = e;
}