
let randomNumber = parseInt(Math.random()*100 +1);
console.log(randomNumber)

let inputValue = document.querySelector('#guessField')

let textShow = document.querySelector('.lowOrHi')

let form = document.querySelector('.form');

let remaining  = document.querySelector('.lastResult');

let remove = document.querySelector('.removing')

let previousGuesses = document.querySelector('.guesses')

let guess = 1;
let guessedNumbers = [];


form.addEventListener(('submit') , (e)=>{
   e.preventDefault();
   const enteredNum = parseInt(inputValue.value);
    // console.log(enteredNum)
   if(isNaN(enteredNum)){
    textShow.innerHTML = "enter a valid number"
    setTimeout(()=>{
        textShow.innerHTML =  ""
}, 2000)
   }
   else if(enteredNum > 100){
    textShow.innerHTML = "enter a valid number which is less than 100"
    setTimeout(()=>{
        textShow.innerHTML =  ""
}, 2000)
   }
   else if( enteredNum<=0){
    textShow.innerHTML = "enter a valid number which is greater than 1"
    setTimeout(()=>{
        textShow.innerHTML =  ""
}, 2000)
   }

   else{
     measuringInput(enteredNum, randomNumber);
   }
})


function  measuringInput(userInput, randomNum){
    guessedNumbers.push(userInput); 
    if(guess === 0) guess = 10;

    if (guessedNumbers.length === 10) {
        guessedNumbers = [];
        // textShow.innerHTML = `Your guess count is over and you lost this game`;
    }
    previousGuesses.innerHTML = `[${guessedNumbers.join(', ')}]`;

    if(userInput ===  randomNum ){
        textShow.innerHTML = `Hurray You guessed it right 🏆🏆🏆🏆🏆 in ${guess} attempts` ;
        remove.innerHTML = ""
       
    }
    else if (userInput > randomNum){
        
        textShow.innerHTML = "Your Number is too high try again with a smaller one";
       guess++;
       remaining.innerHTML = `${10 - guess + 1}`
       
        setTimeout(()=>{
            textShow.innerHTML ="";
        } , 2000)
    }

    else {
        textShow.innerHTML ="your Number is too low try again with a bigger one ";
        guess++;
        remaining.innerHTML = `${10 - guess + 1}`
        
        setTimeout(()=>{
            textShow.innerHTML ="";
        } , 2000)
    }
}





