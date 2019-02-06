class Ev{
    odaSayisi:number;
    pencereSayisi:number;
    kat:number;

    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this.odaSayisi=odaSayisi;
        this.pencereSayisi=pencereSayisi;
        this.kat=kat;
    }

    yemekYe(){
        console.log(this.kat+". katta Yemek Yedi");
    }

}

let ev=new Ev(3,4,5);
ev.yemekYe();
console.log(ev.odaSayisi);
