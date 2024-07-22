//타입 종류

///문자
let str: string;
let red: string = 'Red';
let green: string = 'Green';
let myColor: string = `My color is ${red}.`;
let yourColor: string = 'Your color is' + green;

///숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

///불린
let isBoolean: boolean;
let isDone: boolean = false;

///Null / Undefined
let nul: null;
let und: undefined;
nul = null;
num = 123;
console.log(nul);
console.log(und);
console.log(num);

///배열
const fruits: string[] = ['Apple', 'Banana', 'Cherry'];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const union: (string | number)[] = ['Apple', 1, 2, 'Banana', 3]; //유니온 타입

///객체
// typeof DATA === 'object'
const obj: object = {};
const arr: object = [];
const func: object = function () {};

//인터페이스를 통해 재활용 가능
interface User {
    name: string;
    age: number;
    isValid: boolean;
}
const userA: User = {
    name: 'Heropy',
    age: 85,
    isValid: true,
};
const userB: User = {
    name: 'Neo',
    age: 22,
    isValid: false,
};

///함수
const add: (x: number, y: number) => number = function (x, y) {
    return x + y;
};

const add1 = function (x: number, y: number): number {
    return x + y;
};
const a: number = add(1, 2);

//return이 없다면
const hello = function (): void {
    console.log('Hello world~');
};
const h: void = hello();

///Any
let hello1: any = 'Hello world';
hello1 = 123;
hello1 = false;
hello1 = null;
hello1 = {};
hello1 = [];
hello1 = function () {};

///Unknown 데이터의 자료형을 알 수 없을 때 any보다는 Unknown
const a1: any = 123
const u: unknown = 123

const any1: any = u
const boo: boolean = u 
const num1: number = u
const arr1: string[] = u
const obj1: {x: string, y: number} = u

///Tuple
const tupe: [string, number, boolean] = ['a', 1, false]
const users: [number, string, boolean][] = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]]

///Void
function hello2(msg: string): void{
    console.log(`Hello ${msg}`)
}
const hi: void = hello2('world')

///Never
const nev: [] = []
nev.push(3)

///Union
let union1: string | number
union1 = 'Hello type!'
union1 = 123
union1 = false

///Intersection
interface User1{
    name: string,
    age: number
}
interface Validation{
    isValid: boolean
}

const heropy1: User1 & Validation = {
    name: 'Neo',
    age: 85,
    isValid: true
} 