// FOR LOOP
// --------------------------------------------

// for(let i = 1; i<=10; i++){
//     console.log(i)
// }



// nesting of loops
// -------------------------------------

// for(let i=1; i<=10; i++){
//     console.log(`value of outer loop is ${i}`)
//     for(let j=1; j<=10; j++){
//         console.log(`value of ${i} * ${j} = ${i*j}`)
//     }
// }



// break and continue
// --------------------------------------------


// for (let index = 0; index < 10; index++) {
//     if(index == 5){
//         console.log(` ${index} detected `)
//         break
//     }
//      console.log(`value is ${index}`)
    
// }

// for (let index = 0; index <= 10; index++) {
//     if(index == 5){
//         console.log(` ${index} detected `)
//         continue
//     }
//      console.log(`value is ${index}`)
    
// }



//WHILE LOOP
// -------------------------------------

//  let i = 0;

    // while(i<=10){
    //  console.log(`value is ${i}`)
    //  i++;
    // }

    // let myarray = ['msd' , 'rohit'  , 'virat']

    // while(i<myarray.length){
    //     console.log("Value is " + myarray[i])
    //     i++;
    // }






   // DO WHILE LOOP
//    -------------------------------

//    let i = 0;
//    do{
//      console.log(`value is ${i}`)
//      i++;
//    }while(i<=1)





// FOR OF LOOP
// ---------------------------


// let  arr = ["apple" , "banana" , "cherry"]

// for (const iterator of arr) {
//     console.log(iterator)
// }

// let myobj = {
//     name: "mridul",
//     age:21,
//     hobbies:'cricket'
// }

// for (const i of myobj) {
//     console.log(i)
// }

// forof loop doesn't work directly on objects , we have to destructure the object and then use it.

// for (const [key , value] of Object.entries(myobj)) {
//      console.log(`${key}: ${value}`);
//     // now it works on objects as well
// }





//FOR IN LOOP
//----------------------------

// let arr = [10,29,3,4,5,6]

// for (const i in arr) {
//     console.log(`index is ${i} and value is ${arr[i]}`);
// }





// FOR EACH LOOP
//---------------------------------

// const name = [10,20,30,40]

// name.forEach((element) => console.log(element))

// const  person = ['mridul' , 'adani' , 'ambani']

// const person2 = [];

// person.forEach((item) =>{
//     person2.push(item)
//     // console.log(person2)
// })

// console.log(person2)


// const arr = [
//     {
//         langName: 'Javascript',
//         langSign:'js'
//     },
//     {
//         langName: 'cpp',
//         langSign:'c++'
//     },
//     {
//         langName: 'python',
//         langSign:'py'
//     },
//     {
//         langName: 'java',
//         langSign:'java'
//     },
//     {
//         langName: 'Reactjs',
//         langSign:'rejs'
//     },
// ]

// arr.forEach((item) =>{
//     console.log(item.langSign)
// })