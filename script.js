let input = document.querySelector(".number");
let button = document.querySelector(".mainButton");
let inputValue ;
button.disabled=true;
const inputBlur = (e) => {
  if (e.target.value.toString().length ==9) {
    button.disabled=false;
    inputValue = e.target.value;
    input.classList.remove('red');
    
  }
  else{
    input.classList.add('red');
  }
};
const buttonHandler = () => {
  if (inputValue) {
    window.open("https://wa.me/+91" + inputValue, "_self");
  }
};

input.addEventListener("keydown", inputBlur);
button.addEventListener("click", buttonHandler);
