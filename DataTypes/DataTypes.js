// broadly data types are of two types
// 1. Primitive
//  String , number , boolean , null , undefined , symbol , bigInt .

const num = 12;
const num1 = 123.2;

// console.log(typeof num1)

const isLogged = true;
const logging = null;

let mridul;  // undefined

// console.log(logging)
// console.log(mridul)


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id)
// console.log(anotherId)

// console.log(id === anotherId)



//  2. Non-primitive or reference
//  arrays , objects , functions


let heroes = ["mridul" , "Mata" , "jiji" , "papa"]

let myObj = {
    name:"mridul",
    age: 21,
    hobby:"cricket",
}


let func = function(){}

/*console.log(typeof heroes)
console.log(typeof myObj)
console.log(typeof func)*/



// Return type of variables in JavaScript

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

    // VERY IMPORTANT , ALL ABOUT DATATYPES



    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    // Memory in javascript
    // 1. Stack (for Primitive DataType)    2. Heap (for non Primitive Datatypes)

    // in stack , we always get the copy of the value not reference . So if you change anything it will not reflect outside the block where variable is declared

    // let ytName = "mridulGupta"
    // let newYtName = ytName

    // newYtName = "mridulking"

    // console.log(ytName);
    // console.log(newYtName);


    // in heap , we always store the non-primitive datatype values and reference to that value is stored in stack .

    let userOne = {
        name:"mridul",
        upi:"mridulians",
    }

    let userTwo = userOne

    userOne.upi = "MridulKing12345"

    console.log(userOne);
    console.log(userTwo);

    // in non primitive datatype , if we change something in one reference it will also reflect in another reference

    