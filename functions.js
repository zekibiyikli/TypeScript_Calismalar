function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
function topla4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
function topla5(x, y) {
    return x + y;
}
function topla6(x, y) {
    if (y) {
        return x + y;
    }
    else {
        return x;
    }
}
////console.log(topla(2,3));
//console.log(topla("Ankara",2));
/////console.log(topla2(5,7));
//console.log(topla3(4,8));
console.log(topla4(3));
console.log(topla4(3, 8));
console.log(topla5(5));
console.log(topla6(5));
console.log(topla6(5, 8));
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
function davetEt2() {
    var digerleri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        digerleri[_i] = arguments[_i];
    }
    return digerleri.join(" ");
}
console.log(davetEt("Engin", "Derim", "Zeki", "Serkan"));
console.log(davetEt2("Engin2", "Derim2", "Zeki2", "Serkan2"));
console.log(davetEt2());
