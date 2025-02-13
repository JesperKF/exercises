"use strict"

let btn = document.getElementById('begin');
// let output = document.getElementById('outputtext'); 
// let inputField = document.getElementById('userInput');

import { getRandomNumber } from "../utils/utils.js"

btn.addEventListener("click", function(){
    console.log(getRandomNumber(100));   
});

