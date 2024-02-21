// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Use of 'this' keyword

let user1 = {
    username:'Mridul',
    age: 21,

    welcome : function(){
        console.log(`${this.username} , welcome in this world`);
        console.log(this)
    }

}

// user1.welcome();
// user1.username  = "Sameer"
// user1.welcome();

// console.log(this)

// 'this' keyword gives the context of the current scenario .
// In an object method, this refers to the object.
// In a function, this refers to the global object. i.e window object


function mri(){
    console.log(this)
}

mri(); // gives the global object (window)


 // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Arrow Function

 const arr = () =>{
    console.log(this)
 }

 arr() // gives {} empty object as a output


 //Regular functions have their own 'this' context 
 // Arrow functions, on the other hand, do not have their own 'this' context.