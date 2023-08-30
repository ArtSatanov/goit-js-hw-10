import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_fRWteppQp5QuzzEUJhf1msveKO9JBnOqUGQgzkqPKAfAKyfAENHU7maeb3sfPrvh';

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const refs = {
  dropDownMenu: document.querySelector('.breed-select'),
  container: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

function catsSelectorMarkup(arr) {
  const markup = arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  refs.dropDownMenu.insertAdjacentHTML('beforeend', markup);
}

function cantInfoMarkupPic(arr) {
  const markup = arr
    .map(
      ({ url }) =>
        `<div style="margin-top:20px ">
      <img src="${url}" alt="Cat" width="300" style="margin-top:20px display: block">
      </div>
   `
    )
    .join('');
  refs.container.insertAdjacentHTML('afterbegin', markup);
}

function cantInfoMarkup(arr) {
  const markup = arr
    .map(
      ({ name, description, temperament }) =>
        `<div style="margin-top:20px ">
         <h2>${name}</h2>
         <p>${description}</p>
         <p><span style="font-weigth:500">Temperament:</span> ${temperament}</p>
      </div>
   `
    )
    .join('');
  refs.container.insertAdjacentHTML('beforeend', markup);
}

fetchBreeds().then(results => {
  catsSelectorMarkup(results.data);
});

refs.dropDownMenu.addEventListener('change', event => {
  refs.container.innerHTML = '';
  refs.loader.hidden = false;

  let targetId = event.target.value;
  console.log(targetId);

  fetchCatByBreed(targetId)
    .then(results => {
       refs.loader.hidden = true;
       refs.container.setAttribute("style", "display:flex gap:40px");

      console.log(results.data);
      console.log(results.data[0].breeds);
      cantInfoMarkupPic(results.data);
      cantInfoMarkup(results.data[0].breeds);
    })
    .catch(() => {
      refs.error.hidden = false;
    });
});
