// set initial count
let count =0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEech(funtion () {
  btn.addEventListener('click', function(e){
    const style = e.currentTarget.classList;
    if(style.container(decrease)){
     count--;
    }
    value.textContent = count;
  })
});