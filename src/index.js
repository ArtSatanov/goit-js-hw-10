import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';


const GET_ALL_RECIPES = '/recipes';
const GET_ALL_POPULAR_RECIPES = '/recipes/popular';
const GET_RECIPES_BY_ID = '/recipes/{id}';
const ADD_RESIPES_RATING = '/recipes/{id}/rating';
const GET_ALL_AREAS = '/areas';
const GET_ALL_CATEGORIES = '/categories';
const GET_ALL_EVENTS = '/events';
const GET_ALL_INGREDIENTS = '/ingredients';
const ADD_ORDER = '/orders/add';

const ID = `{id}`;

axios.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
// Додаємо перехоплювач відповідей
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
    console.log(error);
  }
);


const refs = {
  dropDownMenu: document.querySelector('.breed-select'),
  container: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  input: document.querySelector('.test'),
  inputRecipe: document.querySelector('.test-recipe-cards')
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

// function stylesAfterReload() {
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
//   }
// }
//   stylesAfterReload()
  
// .....................................................................................................................................................


function getRecipeId(event) {
  console.log(event.target.parentNode.dataset.id); 
  console.log(event.target);
  return event.target.parentNode.dataset.id;
}


async function getResipesById(id) {
  const response = await axios.get(`${GET_RECIPES_BY_ID}`.replace(ID, id));
  console.log(response.data);
  return response.data;
}

function onLikeClick(event) {
  const id = getRecipeId(event);
  getResipesById(id)
    .then (
      (data) => {
        const favRecData = JSON.parse(localStorage.getItem('favRecData')) || [];
        if (event.target.checked === true) {
        favRecData.push(data);
        console.log(favRecData);
        localStorage.setItem('favRecData', JSON.stringify(favRecData))
      } else if (event.target.checked === false) {
        console.log(id)
        console.log(favRecData.findIndex(RecData => RecData._id === id))
        const objToRemove = favRecData.findIndex(recData => recData._id === id);
          favRecData.splice(objToRemove, 1);
        }
        localStorage.setItem('favRecData', JSON.stringify(favRecData));
      })
}

function getFavRec() {
  return JSON.parse(localStorage.getItem('favRecData')) || [];
}

// let favRecData = getFavRec();
// console.log(favRecData);

// console.log(refs.inputRecipe.children);

// function makeItChecked(arrayli,arrayLS) {
//   for (const li of arrayli) {
//     if ((arrayLS.findIndex(RecData => RecData._id === li.dataset.id)) >= 0 ) {
//       li.children[0].checked = true
//     }
    

//   }
// }

// if (favRecData.length === 0 || favRecData === null) {
//   // change the ref
//   refs.input.checked = false;
  
// } else if (favRecData.length > 0) {
//     // change the ref
//   makeItChecked(refs.inputRecipe.children, favRecData);
// }




refs.inputRecipe.addEventListener('click',onLikeClick)



