export {}
type User = {
    id: number;
    name: string;
}

const myName: string = "Vu Bao Linh";
const myAge: number = 18;
const myObj: object = {};

const numberArr: number[] = [1,2,3,4];
const stringArr: string[] = ["a","b","c"];
const objectArr: User[] = [{id:1,name:"Linh"},{id:2,name:"Vu"}]

function sum(a: number, b: number):number{
    return a + b;
}

type Product = {
    id: number, 
    name: string,
}

const getProduct =  <T extends Product> (product: T[])=>{
    const result = product.map(item => item.name);
}

getProduct([{id:1,name:"Linh"},{id:2,name:"Vu"}]);




