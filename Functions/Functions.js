
function user(){
   return "hello"
}

// console.log(user())


function addTwoNumber (number1 , number2){
    return number1 + number2;
}

addTwoNumber(2,4) // prints nothing

// console.log(addTwoNumber(2,4)) // prints the answer


// function myName(username= "Mrid"){  --------> known as Parameters with default value
//     return `my name is ${username}`
// }

// console.log(myName("mridul")) --------> known as arguments
// console.log(myName()) // if we are not providing any argument , then parameter value is taken


//     FOR OBJECTS IN FUNCTIONS

// const users = {
//     username: 'mridul',
//     age: 21
// }

// function arr (myObj){
//      return `my name is ${myObj.username} and my age is ${myObj.age}`
// }

// console.log(arr(users)) // this is how an object pass in a function

// console.log(arr({username:'jiji' , age:100})) // passing default arguments


// FOR ARRAYS IN FUNCTIONS

// const arr = [200,333,434,444];

// function solu(myArr){
//  return myArr[3];
// }

// // console.log(solu(arr))

// console.log(solu([200,400,600,800])) // passing default arguments



function addToCart(...num){   //   REST OPERATOR IN JS. BOTH SPREAD AND REST OPERATORS ARE USED USING ...(TRIPLE DOTS)
   return num;
}

console.log(addToCart(5,7,9,1,2,3,4,5));
