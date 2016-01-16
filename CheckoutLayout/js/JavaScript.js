function rescaleImage(b, f, c) {
    var a = b.height;
    var d = b.width;
    var g = a / d;
    if (a > f) {
        g = f / a;
        a = a * g;
        d = d * g
    }
    if (d > c) {
        g = c / d;
        a = a * g;
        d = d * g
    }
    b.width = d;
    b.height = a;
    if (d == 0 || a == 0) {
        $(b).css('height', f);
        $(b).css('width', c)
    } else {
        $(b).css('height', a);
        $(b).css('width', d)
    }


}

function ShowPaymentOption(id, cnt) {
    $(".payMethodCon").hide();
    $("#" + id + "Content").show();
    $(".payMethod").css('backgroundColor', '#f2f2f2');
    cnt.style.backgroundColor = "#FFF";

}

