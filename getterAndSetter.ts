class Kisi{
    private _isim:string;

    get isim():string{
        return "Sayın "+this._isim;
    }

    set isim(isim:string){
        this._isim=isim;
    } 
}

let kisi=new Kisi();
kisi.isim="Zeki";
console.log(kisi.isim);