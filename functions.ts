function topla(x,y){
    return x+y;
}

function topla2(x:number,y:number):number{
    return x+y;
}

let topla3=function(x:number,y:number):number{
    return x+y;
}

function topla4(x:number,y:number=4):number{
    return x+y;
}

function topla5(x:number,y?:number):number{
    return x+y;
}

function topla6(x:number,y?:number):number{
    if(y){
        return x+y;
    }else{
        return x;
    }
}

////console.log(topla(2,3));
//console.log(topla("Ankara",2));
/////console.log(topla2(5,7));
//console.log(topla3(4,8));
console.log(topla4(3));
console.log(topla4(3,8));
console.log(topla5(5));
console.log(topla6(5));
console.log(topla6(5,8));

function davetEt(ilkDavetli:string,...digerleri:string[]):string{
    return ilkDavetli+ " " + digerleri.join(" ");
}

function davetEt2(...digerleri:string[]):string{
    return digerleri.join(" ");
}

console.log(davetEt("Engin","Derim","Zeki","Serkan"));
console.log(davetEt2("Engin2","Derim2","Zeki2","Serkan2"));
console.log(davetEt2());