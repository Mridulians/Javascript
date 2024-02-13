const str = "mridul"
const str1 =" Gupta"

// console.log(`hello my name is ${str}`)

const game = new String("Mridul") // another way of string declaration

// console.log(`hello my name is ${game}`)

// different functions of strings

// console.log(str.length)  // gives the length of a string

// console.log(str.indexOf('i'))
// console.log(str.charAt(2))   // gives the character at index 2

// console.log(str.concat(str1))

// console.log(str.at(5)) // same as charAt


// console.log(`Character code ${str.charCodeAt(4)} is code for ${str.charAt(4)}`)

// console.log(str.endsWith('l')) // checks from which character the string ends . It returns true if it ends with correct value otherwise false



// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = "brownie"
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is': 'is not' } found in the sentence`)
// includes find whether the given word is found in the sentence or not. It returns true if it is present otherwise false.



// const newStr = "Virat is the bext cricketer in the world , and Virat breaks all the records ."
// console.log(newStr.replace('Virat', 'Dhoni'));    // replaces Virat with Dhoni only in one position
// console.log(newStr.replaceAll( 'Virat','Dhoni'));     // replaces Virat with Dhoni everywhere in the string



// const mri = "Mridul"
// console.log(mri.slice(1,4)) // in slice first argument represents the starting index which is included and other represented end index which is not included



// const stri = 'The quick brown fox jumps over the lazy dog.';

// const word = stri.split(' ') // splits the string in to single single word

// console.log(word[1]  , word[6])



const hello = "      hello world           "

console.log(hello.trim())
