
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

let input = document.querySelector(".number");

let mainDiv =document.querySelector('.main-div');
let darkMode=document.querySelector('.darkmode');



let inputValue;
let darkVariable=true;
const inputBlur = (e) => {
  inputValue = e.target.value;

  if (inputValue.toString().length ===10) {
    input.classList.remove('red');
  }
  else{
    input.classList.add('red'); 
  }
};

const buttonHandler = () => {
  if (inputValue.toString().length ===10) {
    window.open("https://wa.me/+91" + inputValue, "_self");
  }
};

const darkModeHandler=()=>{
 let currentTheme = document.documentElement.getAttribute("data-theme");
 let targetTheme;

  if (currentTheme === "light") {
      targetTheme = "dark";
  }else{
     targetTheme = "light";
  }

  document.documentElement.setAttribute('data-theme', targetTheme)
  localStorage.setItem('theme', targetTheme);
}

input.addEventListener("keyup", inputBlur);
mainDiv.addEventListener("sumbit", buttonHandler);
darkMode.addEventListener('click',darkModeHandler)

