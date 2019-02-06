interface Product{
    id:number;
    name:string;
    price:number;
}

class Product2{
    id:number;
    name:string;
    price:number;
}

function save(product:Product){
    console.log(product.name+" kaydedildi.");
}

function save2(product:Product2){
    console.log(product.name+" kaydedildi.");
}

save({id:1,name:"Laptop",price:5});
let mouse=new Product2();
mouse.name="asd";
save2(mouse);