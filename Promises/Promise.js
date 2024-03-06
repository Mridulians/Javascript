// promise 1
// const promiseOne = new Promise(function(resolve , reject){
//     setTimeout(()=>{
//         console.log("I am setTimeout 1")
//         resolve();
//     } , 1000)
// })

// promiseOne.then(function(){
//     console.log("i am first promise")
// })


// promise 2 , in which we didn't store promise in a variable.
// new Promise(function(resolve , reject){
//     setTimeout(()=>{
//         console.log("i am setTimeout 2")
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("i am second promise")
// })


// promise 3 , to pass data

// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(() => {
//         resolve({username:"mridul" , email:"gmridul898@gmail.com"})
//     }, 1000);
// })
 
// promiseThree.then((user)=>{  // user gives the data of the resolve function
//     console.log(user.email)
//     console.log(user.username)
// })


// promise 4

// const promiseFour = new Promise((resolve , reject)=>{
//   setTimeout(()=>{
//       let error = true;

//       if(!error){
//         resolve({username:"mridul" , email:"gmridul898@gmail.com"})
//       }
//       else{
//         reject("Something Went WRONG out of the box.......")
//       }
//   } , 1000)
// })

// promiseFour
// .then((data)=>{
//     console.log(data)
//     return data.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Finally everything works fine")
// })



// one way to handle api through try , catch
// async function getUsers(){
//     try {
//         const response  = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log("E:" , error)
//     }
// }

// getUsers();



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
     const data = response.json();
     return data;
})
.then((users)=>{
    console.log(users)
})
.catch((err)=>{
 console.log(err)
})