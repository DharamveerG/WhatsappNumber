let input = document.querySelector(".number");
let button = document.querySelector(".mainButton");
let inputValue;
const inputBlur = (e) => {
 
  inputValue = e.target.value;
};
const buttonHandler = () => {
    window.open("https://wa.me/+91"+inputValue,"_self");
};

input.addEventListener("blur", inputBlur);
button.addEventListener('click',buttonHandler);

