import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  dropDownMenu: document.querySelector('.breed-select'),
  container: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  input: document.querySelector('.test'),
  inputRecipe: document.querySelector('.test-recipe-card')
};
  
console.log(refs);

// function catsSelectorMarkup(arr) {
//   const markup = arr
//     .map(({ id, name }) => `<option value="${id}">${name}</option>`)
//     .join('');
//   refs.dropDownMenu.insertAdjacentHTML('beforeend', markup);
// }

// function cantInfoMarkupPic(arr) {
//   const markup = arr
//     .map(
//       ({ url }) =>
//         `<div style="margin-top:20px ">
//       <img src="${url}" alt="Cat" width="300" style="margin-top:20px display: block">
//       </div>
//    `
//     )
//     .join('');
//   refs.container.insertAdjacentHTML('afterbegin', markup);
// }

// function cantInfoMarkup(arr) {
//   const markup = arr
//     .map(
//       ({ name, description, temperament }) =>
//         `<div style="margin-top:20px; width:600px;">
//          <h2 style="margin-top:0">${name}</h2>
//          <p>${description}</p>
//          <p><span style="font-weight: 800;">Temperament:</span> ${temperament}</p>
//       </div>
//    `
//     )
//     .join('');
//   refs.container.insertAdjacentHTML('beforeend', markup);
// }

// fetchBreeds()
//   .then(results => {
//   catsSelectorMarkup(results.data);
//   new SlimSelect({
//   select: refs.dropDownMenu,
//   })
// });

// refs.dropDownMenu.addEventListener('change', event => {
//   refs.container.innerHTML = '';
//   refs.loader.hidden = false;

//   let targetId = event.target.value;
//   console.log(targetId);
//   fetchCatByBreed(targetId)
//     .then(results => {
//       if (results.data.length > 0) {
//        refs.loader.hidden = true;
//        refs.container.setAttribute("style", "display:flex; gap:20px; flex-direction:row;");
//       console.log(results.data);
//       console.log(results.data[0].breeds);
//       cantInfoMarkupPic(results.data);
//       cantInfoMarkup(results.data[0].breeds);
//       } else {
//         refs.loader.hidden = true;
//         Notify.failure('Oops! Something went wrong! Try reloading the page!');
//       }
      
//     })
// });


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>THEME CHNAGER >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// refs.input.addEventListener('click', themeChangerTolocalStorage);

// function themeChangerTolocalStorage(event) {
//   event.target.checked ? localStorage.setItem('themeColor', 'dark') : localStorage.setItem('themeColor', 'white');
//   let theme = localStorage.getItem('themeColor');
// if (theme === 'white') {
//     // Add here class with dark design to elemtnts
//     document.querySelector('body').style.backgroundColor = "red";  
// } else if (theme === 'dark') {
//     // Add here class with dark design to elemtnts
//    document.querySelector('body').style.backgroundColor = "black"
//   }
// }


// let currentStyle = localStorage.getItem('themeColor');

// if (currentStyle === 'white' || currentStyle === null) {
//   // change the ref
//   refs.input.checked = false;
//     // Add here class with dark design to elemtnts
//     document.querySelector('body').style.backgroundColor = "red";  
// } else if (currentStyle === 'dark') {
//     // change the ref
//   refs.input.checked = true;
//     // Add here class with dark design to elemtnts
//    document.querySelector('body').style.backgroundColor = "black"
// }
  
// .....................................................................................................................................................






