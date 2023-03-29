// ploymprphism
type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]):void
}
// generic을 통해서 타입스크립트가 call signature의 타입을 인식해서 적용한다.

const superPrint: SuperPrint =  (arr) => {
    arr.forEach(i => console.log(i));
}

//Generics Recap

type SuperPrint2 = <T, M>(a: T[], b:M ) => T|M

const superPrint2: SuperPrint2 = (a) => a[0]

const a = superPrint2([1,2,3,4], "M")
const b = superPrint2([true, false, true], 1)
const c = superPrint2(["a", "b", "c"], false)
const d = superPrint2([1, 2, true, false, "hello"], "test")

// Type Overriding
type NormalPlayer<E> = {
    name: string,
    metaData: E
}

const normalPlater: NormalPlayer<string> = {
    name: "ingyu",
    metaData: "user"
}

type A = Array<number>

const arrOfA:A = [1, 2 ,3]

// class

abstract class User {
    constructor(
        private firstName:string,
        private lastName:string,
        public nickname:string,
        protected protectedInfo: string
    ) {}
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    abstract getNickName():void
}

class Player extends User {
    getNickName(){
        // console.log(this.lastName) private는 상속받아도 접근불가 -> 에러
        console.log(this.protectedInfo);
    }
}

const nico = new Player("nico", "las", "니꼬", "protected");

type Words = {
    [key:string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words ={}
    }
    add(word: Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
    getWord(term: string) {
        return this.words[term]
    }
}

class Word {
    constructor(
        public readonly term:string,
        public readonly def:string
    ) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict()
dict.add(kimchi)
dict.getWord("kimchi")

interface PlayerInterface {
    nickname:string
    team: string
    health: number
}

// interface2

// abstract class User2 {
//   constructor(
//     protected firstName:string,
//     protected lastName:string
//   ) {}
//   abstract sayHi(name:string):string
//   abstract fullName():string
// }

interface User2 {
    firstName: string,
    lastName: string,
    sayHi(name:string):string
    fullName():string
}

class Player3 implements User2 {
    constructor(
        public firstName:string,
        public lastName:string // private 불가
    ) {}
    sayHi(name:string):string {
        return `Hello ${name}. My name is ${this.firstName}`
    }
    fullName():string {
        return `${this.firstName} + ${this.lastName}`
    }
}

class Student {
    fullName: string;
    constructor(
        private firstName: string,
        private middleInitial: string,
        private lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user = new Student("Jane", "M.", "User");

//Polymorphism

interface SStorage<T> {
    [key:string]:T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key:string, value: T){
        this.storage[key] = value
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
}