const arr = [1,2,3,4,5,6,7,8,9,10]

// let myAns = arr.map((item) =>{
//     return item*10
// })

// console.log(myAns)


// multiple chaining of functions
//++++++++++++++++++++++++++++++++++++++++++++++++++++++

let ans = arr.map((item) => item*10).map((item) => item+1).map((item) => item + ' ' + 'hello')

console.log(ans)