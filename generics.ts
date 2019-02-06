function deger(x:number):number{
    return x;
}

function deger2(x:string):string{
    return x;
}

let sayi = deger(1)
console.log(sayi)
let sehir=deger2("Ankara");
console.log(sehir)

function deger3<T>(x:T):T{
    return x;
}

let sayi3= deger3<number>(2);
let sehir3=deger3<string>("İstanbul");
console.log(sayi3+"-"+sehir3);