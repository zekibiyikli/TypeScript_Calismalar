class Musteri {
    private isim:string;
    public isim2:string;
    protected isim3:string;
}

class Diger extends Musteri{
    isim3;
    isim2;
}

let musteri = new Musteri();
musteri.isim2;