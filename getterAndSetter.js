var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "isim", {
        get: function () {
            return "Sayın " + this._isim;
        },
        set: function (isim) {
            this._isim = isim;
        },
        enumerable: true,
        configurable: true
    });
    return Kisi;
}());
var kisi = new Kisi();
kisi.isim = "Zeki";
console.log(kisi.isim);
