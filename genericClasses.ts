class GenericClass<T>{
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre;
    }
}

let sinif=new GenericClass<number>();
sinif.fonksiyon(1);
let sinif2=new GenericClass<string>();
sinif2.fonksiyon("Zeki");

