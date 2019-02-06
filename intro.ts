function selamVer(isim:string){
    return "Merhaba "+isim
}

let mesaj = selamVer("Zeki")

console.log(mesaj)

let sayi:number
let sayi2:number=2
sayi=10
sayi=10.4

let sehir:string
let sehir2:string="ilkdeger"
sehir="istanbul"
sehir="ankara"

let dogruMu:boolean
let dogruMu2:boolean=true
dogruMu=false
dogruMu=true

let sayilar:number[]
let sayilar2:number[]=[1,2,3]
let sayilar3:Array<number>=[1,2,3]
let kelimeler:string[]
let kelimeler2:string[]=["1","3"]
let kelimeler3:Array<string>=["1","3"]

let dizi:[number,string]=[2,"aa"]

enum Renk{Kirmizi,Siyah,Mavi}
let renk:Renk=Renk.Kirmizi

let deger:any="Ankara"
deger=2
deger=true
deger={}

let deger2:void=undefined

function selamVer2():void{
    console.log("Merhaba")
}