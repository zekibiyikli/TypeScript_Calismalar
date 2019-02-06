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
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("Kaydedildi");
    };
    return KrediBase;
}());
var TuketiciKredi = /** @class */ (function (_super) {
    __extends(TuketiciKredi, _super);
    function TuketiciKredi() {
        return _super.call(this) || this;
    }
    //abstrack constructor parameter olmadığı için düper eklendi 
    // eğer içi dolu olsaydı super("asdas") olurdu
    TuketiciKredi.prototype.hesapla = function () {
        console.log("tüketici kredisine göre hesap yapıldı");
    };
    return TuketiciKredi;
}(KrediBase));
var MortgageKredi = /** @class */ (function (_super) {
    __extends(MortgageKredi, _super);
    function MortgageKredi() {
        return _super.call(this) || this;
    }
    MortgageKredi.prototype.hesapla = function () {
        console.log("Konut Kredisine göre hesap yapıldı");
    };
    return MortgageKredi;
}(KrediBase));
var TuketiciKredisi = new TuketiciKredi();
TuketiciKredisi.hesapla();
TuketiciKredisi.kaydet();
var MortgageKredisi = new MortgageKredi();
MortgageKredisi.hesapla();
MortgageKredisi.kaydet();
var kredi;
kredi = new TuketiciKredi();
kredi = new MortgageKredi();
