const buttons = document.querySelectorAll(".buttons");
const bd   = document.querySelector('body')


buttons.forEach(function (btn){
    btn.addEventListener('click' , (e)=>{
        // console.log(e.target)
        // console.log(e.target.id)
      bd.style.backgroundColor = e.target.id
    })
   
})