let input = document.querySelector(".number");
let button = document.querySelector(".mainButton");
let inputValue;
button.disabled=true;
const inputBlur = (e) => {
  inputValue = e.target.value;
  console.log(inputValue);
  
  if (inputValue.toString().length ===10) {
    button.disabled=false;
    input.classList.remove('red');
    
  }
  else{
    button.disabled=true;
    input.classList.add('red');
  }
};

const buttonHandler = () => {
  if (inputValue.toString().length ===10) {
    window.open("https://wa.me/+91" + inputValue, "_self");
  }
  
};

input.addEventListener("change", inputBlur);
button.addEventListener("click", buttonHandler);
