let input = document.querySelector(".number");
let button = document.querySelector(".mainButton");
let inputValue;
button.disabled=true;
const inputBlur = (e) => {
  inputValue = e.target.value;
  if (inputValue.toString().length ===9) {
    button.disabled=false;
    input.classList.remove('red');
    
  }
  else{
    button.disabled=true;
    input.classList.add('red');
  }
};

const buttonHandler = () => {
  if (inputValue.toString().length ===9) {
    window.open("https://wa.me/+91" + inputValue, "_self");
  }
  
};

input.addEventListener("keydown", inputBlur);
button.addEventListener("click", buttonHandler);
