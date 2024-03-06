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

//  const google = {
//     name:'Mridul',
//     instructor:'Mridulians',
//     instructorName:'Jo bhi ho'
//  }                

//  const {instructorName , name , age=21} = google
// console.log(google)
//  console.log(instructorName , name , age)


// const mySelf = {
//     firstName:"Mridul",
//     lastName : "Gupta",
//     age:21,
// }

// const {firstName , lastName ,  fullName = `${firstName} ${lastName}`} = mySelf

// console.log(fullName)


// NESTED  OBJECTS DESTRUCTURING ===============================================================================================

const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}

const {department : {address : {zip , city , street}}} = user; // this is known as nesting object destructuring.

// console.log(department) // gives complete info about department

// console.log(address) // gives info about address in department object

console.log(street)
console.log(zip)
console.log(city)