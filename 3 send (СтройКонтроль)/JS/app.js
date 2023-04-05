"use strict";

const mark = document.querySelector('mark');

mark.addEventListener('click', () => {
    mark.classList.toggle('yellow')
})


// const form = document.querySelector('form'),
//     input = document.querySelectorAll('input'),
//     span = document.querySelector('.inputValue'),
//     btn = document.querySelector('.formBtn');


// form.addEventListener('click', (e) => {
//     e.preventDefault;

//     if (input.value = '') {
//         span.textContent = "Please enter a value";
//     }

// })





// btn.addEventListener('click', (e) => {
//     e.preventDefault;

//     btn.classList.add('clik')
// })




const span = document.querySelector('.modes'),
      clickLable = document.querySelector('.navbar__menu-lable');

      clickLable.addEventListener('click', () => {
        span.classList.add('dark')
      })