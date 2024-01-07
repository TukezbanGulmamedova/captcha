"use strict";

// Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

// DOM elements
const captchaText = document.getElementById("captcha__text");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

let chars = [];
let captcha = "";



const getRandomChar = () =>{

    const mixedString = numbers.concat(upperCaseLetters, lowerCaseLetters)

    return mixedString[Math.floor(Math.random() * mixedString.length)]
}

const generateRandomCaptcha = () =>{
    for (let index = 1; index < 7; index++) {
       captcha +=getRandomChar();
        
    }

    captchaText.textContent =captcha;
}

generateRandomCaptcha();

input.addEventListener("input", (event) =>{
    const givenValue = event.target.value;

    if (givenValue === captcha) {
        input.classList.add("ring-green-600")
        btn.classList.add("bg-green-600", "cursor-pointer")
    }
    else{
        input.classList.remove("ring-green-600")
        btn.classList.remove("bg-green-600", "cursor-pointer")
    }

    if(givenValue !== captcha && givenValue.length ===6){
        input.classList.add("ring-red-600")
    }
    else{
        input.classList.remove("ring-red-600")
    }
})


input.addEventListener("keypress", (event) =>{
    const givenValue = event.target.value;

    if(givenValue.length === 6){
        event.preventDefault();
    }
})