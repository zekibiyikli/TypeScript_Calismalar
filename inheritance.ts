class Kisi{
    kaydet(){
        console.log("Kaydedildi");
    }
}

class Musteri extends Kisi{
    satis(){
        console.log("Satıs Yapıldı");
    }
}

class Personel extends Kisi{
    maas(){
        console.log("Maas Ödendi");
    }
}

let musteri=new Musteri();
musteri.kaydet();
musteri.satis();
let personel =new Personel();
personel.kaydet();
personel.maas();