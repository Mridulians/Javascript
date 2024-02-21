
if(true){
    let a =10
    const b =20
    var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)    // we defined c in if else , but phir bhi usko block ke bahar access kr skte hai , yeh 'var' variable declaration se hota hai . that's why avoid using var in js and use let to declare variables in js.



function one(){
    const icecream = "vanilla"

    function two(){
        const choco = "cadbury"

        console.log(icecream + ' '  + choco)
        
    }

    // console.log(choco)
    two()
}

// console.log(icecream)
// one();


// we can access the variable from outside function to inner function , but vice-versa is not quite possible and result in undefined error.





// if(true){
//     const username  = "Mridul"

//     if(username === "Mridul"){
//         const surname = "Gupta"
//         console.log(`my name is ${username} ${surname}`)
//     }

//     // console.log(surname) gives error
// }

// console.log(username)   gives error




// +++=====+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// small concept of hoisting
addone(5)

function addone(num){
  return console.log(num+1);
}

// call function before initialization is valid when we use function keyword and without exprssion



addtwo(5)
const addtwo = function(num){ // known as expression
    return console.log(num+2);
}

// call function before initialization is not valid and gives error when we use expression in a function. because the interpreter doesnot know what to do with that expression until it gets executed.


