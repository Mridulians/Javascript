const indian_cricketers = ["Dhoni", "Virat", "Rohit"];
const Aussies = ["Smith", "Warner", "Starc"];
// indian_cricketers.push(Aussies)

// console.log(indian_cricketers)

// const all = indian_cricketers.concat(Aussies)
// console.log(all)

// const all_cricketers = [...indian_cricketers , ...Aussies , ...indian_cricketers , ...Aussies] // spread operator is mostly used to join arrays
// console.log(all_cricketers)

// const newArr = [1,2,3,[4,5] , 6 , [7,8,[9,10]]]

// console.log(newArr.flat(Infinity))

console.log(Array.isArray("Mridul")); // return false as it is not an array
console.log(Array.isArray([1, 2, 2])); // return true as it is an array


console.log(Array.from("Mridul"))  // ['M' , 'r' , 'i' , 'd' , 'u' , 'l']

 console.log(Array.from({name: "Mridul"})) // return []  


 let score1 = 200;
 let score2 = 150;
 let score3 = 300;

 console.log(Array.of(score1 , score2 , score3)); // [ 200, 150, 300 ]