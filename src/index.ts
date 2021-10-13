// Basic types
let id: number  =   5
let company: string =   'Google'
let isPublished: boolean = true
let x:  any =  'Hello'
let age: number

// if that not a number it throws error
age = 25 
// age = 'tom' ---> it gives error as we define variable as number

// Arrays
let ids: number[] = [1,2,3,4]

let arr: any[] = [1, 'ben', true] //---> we can give any using arrays if we don't know what to give

//Tuple --> with tuple you can specify the exact types inside array
let person: [number, string, boolean] = [1, 'ben', true] // ['ben', true,1] --> it gives error because you'veto give it order as you mentioned

//Tuple array
let employee: [number, string] [] // [] for array

employee = [
    [1, 'ben'],
    [2, 'john'],
    [3, 'david'],
]

//Union
//--> if you want to a particulaar variable to be hold more than one type you can do that with union.

let pid: string | number

pid = 22 //as number  or pid = '22' as string also it would work.

//Enum
// It allow us to define a set of named constants either numeric or string
enum  Direction1 {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction1.Up) // console.log show output and by defaultly up value is 0 , down=1,...etc and you define values here also

// enum  Direction1 {
//     Up = 1,
//     Down,
//     Left,
//     Right,
// }

// console.log(Direction1.Up) , down will be 2, left=3 , Right=4 it takes automatically based on up value

enum  Direction2 {
    Up = 'string1',
    Down = 'string2',
    Left = 'string3',
    Right = 'string4',
}

console.log(Direction2.Up) // --> to define strings

// Objects
// Object is an instance which contains set of key value pairs
// const user = {
//     id: 1,
//     name: 'ben'
// }
// if u want to add types to above values we can do that
type User ={
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'ben'
}

// Type Assertion
// type-assertion explicitly telling the compiler that we want to treat an entity as a different type 

let cid: any = 1
// let customerId = <number>cid  we cn do this other way
let customerId = cid as number

// Functions
// in functions we'll use classic example of getting the sum of two numbers. we call this " addNum "

function addNum(x: number , y: number): number {
    return x + y
}

console.log(addNum(1, 3)) // if we give (1, '3') gives error b'cause it only excepts number not string as we define

//void --> void is used where there is no data
//we always not have return values
function log(message: string | number): void {
    console.log(message)
}
//even if u want to run 
log(1) // or log('hello')

// Interfaces
// Interfaces is kind of like a custom type or a specific structure to an object or a function
//----> copy from Object and change //just like an onbject
// Can't use interfaces with premitives or with unions

interface UserInterface {
    id: number,
    name: string
}

const user1: UserInterface = {
    id: 1,
    name: 'ben'
}

//Function Interfaces
// We can use interfaces with functions
interface MathFunc {
    (x: number, y: number): number
}

//we call above function using "const"
const add: MathFunc = (x: number, y: number): number => x + y
//we use arrow function 
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
// Now classes are available in java-script there this ever since es6 they were introduced

class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

const dev =new Person (1, 'tony')
const dell =new Person (1, 'sam')

console.log(dev, dell)

//Extending classes(Sub-classes)

class Employee extends Person{
    position: string

    constructor (id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee (2, 'tom', 'dev')
console.log (emp.name)

// Generics
// which are basically used to build reusable components


// function getArray(items: any[]): any[] {
//     return new Array().concat(items) //items that are passed in from concat
// }
// let numArray = getArray ([1,2,3,4])
// let strArray = getArray (['sam', 'david', 'tim'])

// numArray.push('hello')
// now we don't get any error because we pass 168 line to take any value we are passing and return any value

// Now we are going to give generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items) //items that are passed in from concat
}
let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['sam', 'david', 'tim'])

strArray.push('hello')
numArray.push(1)

//<T> it acts as plceholder of type and define type down as number, string look.