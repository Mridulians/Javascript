let user1 = {
    name : "Mridul",
    age: 21,
    location : "Delhi",
    email:"gmridul898@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday" , "Sunday"],
    "full name" : "Mridul Gupta"
}

// console.log(user1["name"]);  // Accessing the property of an object using square brackets
// console.log(user1.name) // both ways are correct


// console.log(user1["full name"])  // for this type of refernces inside the object , square brackets option is the only option to access it.


user1.greeting = function(){
    console.log("this is the first function")
}

user1.greeting2 = function(){
    console.log(`my name is ${this.name} and my age is ${this.age}`)
}

// console.log(user1.greeting())
// console.log(user1.greeting2())

const tinderUser = {}

tinderUser.name = "Mridul"
tinderUser.email = "tinder@gmail.com"
tinderUser.isOnline = true;


const obj1 ={1:'a' , 2: 'b'}
const obj2 ={3:'c' , 4: 'd'}


const user11 = {
    name: "Mridul",
    age:21
}

const user2 = {
    email:"gmridul898@gmail.com",
    isOnline: true
}
// console.log(tinderUser)
// console.log(tinderUser2)

// const obj3 ={...user11 , ...user2}
// console.log(obj3)




const MridulData = {
    name: "Mridul",
    age: 21,
    email:"mridul898@gmail.com",
    hobbies : ["Reading","Coding"],
}

// console.log(Object.keys(MridulData))
// console.log(Object.values(MridulData))
// console.log(Object.entries(MridulData))


// console.log(MridulData.hasOwnProperty('email'))




//  OBJECT DESTRUCTURING IN JS

 const google = {
    name:'Mrdidul',
    instructor:'Mridulians',
    instructorName:'Jo bhi ho'
 }                

 const {instructorName : aisi} = google

 console.log(google.instructorName)
 console.log(aisi)