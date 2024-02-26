console.log("mridul")


const form = document.querySelector('.form')



form.addEventListener(('submit') , (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')

    if(height < 0 || isNaN(height) || height === ' ' ){
        result.innerHTML = "Enter a valid Height"
    }

   else if(weight < 0 || isNaN(weight) || weight === ' '  ){
        result.innerHTML = "Enter a valid Weight"
    }
    else{
        const bmi =  (weight/((height*height)/10000)).toFixed(2)
         if(bmi < 18.6){
            result.innerHTML = bmi + "<br> You are underweight."
         }
         else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = bmi + "<br> You are Normal and led a normal life."
         }
         else{
            result.innerHTML = bmi + "<br> You are OverWeight"
         }
        
    }


    
})





