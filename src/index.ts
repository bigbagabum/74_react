console.log("hallo");
let nums: number[] = [1,2,3];

type Weapon = "saber" | "pistol" | "muscete";

let myWearpon: Weapon = "saber";


function getLength(str: string): number{
  
    return str.length;

}

enum Size {
    Sm = "SMALL",
    Regular = "REGULAR",
    Big = "BIG"
}

enum Milk {
    Cow = "COW",
    Oat = "OAT",
    Coco ="COCO",
    Almond = "ALMOND"
}

type Coffee = {
    size: Size,
    milk: Milk, 
    price: number
}