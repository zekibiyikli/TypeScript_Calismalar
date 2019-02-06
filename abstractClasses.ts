abstract class KrediBase{
    constructor(){}

    kaydet():void{
        console.log("Kaydedildi");
    }

    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase{
    constructor(){super();}
    //abstrack constructor parameter olmadığı için düper eklendi 
    // eğer içi dolu olsaydı super("asdas") olurdu

    hesapla():void{
        console.log("tüketici kredisine göre hesap yapıldı");
    }
}

class MortgageKredi extends KrediBase{
    constructor(){super();}

    hesapla():void{
        console.log("Konut Kredisine göre hesap yapıldı")
    }
}

let TuketiciKredisi=new TuketiciKredi();
TuketiciKredisi.hesapla();
TuketiciKredisi.kaydet();
let MortgageKredisi=new MortgageKredi();
MortgageKredisi.hesapla();
MortgageKredisi.kaydet();
let kredi:KrediBase;
kredi=new TuketiciKredi();
kredi=new MortgageKredi();
