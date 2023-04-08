let a: number = 1;
let b: string = "string";

const obj : {
    name: string,
    age: number;
} = {
    name: "ingyu",
    age: 12
}

console.log(obj.age);

type Obj = {
    name: string,
    age: number
}

const ingyu: Obj = {
    name: "ingyu",
    age: 12,
}

function returnNothing():void {
    console.log("void");
}

function error(): never {
    throw new Error("error");
}

let a: unknown;

a = 1; // error

type CallSignature = (a: number, b: number) => number;
const callSignature: CallSignature = (a, b) => a + b;

type Overloading = {
    (a: number, b: number): number;
    (a: number, b: string): number;
};