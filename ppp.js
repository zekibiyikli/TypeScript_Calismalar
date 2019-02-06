var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Musteri = /** @class */ (function () {
    function Musteri() {
    }
    return Musteri;
}());
var Diger = /** @class */ (function (_super) {
    __extends(Diger, _super);
    function Diger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Diger;
}(Musteri));
var musteri = new Musteri();
musteri.isim2;
