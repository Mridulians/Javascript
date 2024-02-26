console.log("Mridul");

let code = document.querySelector("#code")



function colorChanger() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}



// console.log(colorChanger())
let setting;
const start = document.querySelector('#start').addEventListener(('click') , ()=>{
   setting = setInterval(()=>{
    document.body.style.backgroundColor = colorChanger()
    code.innerHTML = colorChanger();
  } , 1000)
})

const stop = document.querySelector('#stop').addEventListener('click' , ()=>{
    clearInterval(setting);
})