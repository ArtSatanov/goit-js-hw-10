import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css'


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
        `<div style="margin-top:20px; width:600px;">
         <h2 style="margin-top:0">${name}</h2>
         <p>${description}</p>
         <p><span style="font-weight: 800;">Temperament:</span> ${temperament}</p>
      </div>
   `
    )
    .join('');
  refs.container.insertAdjacentHTML('beforeend', markup);
}

fetchBreeds()
  .then(results => {
  catsSelectorMarkup(results.data);
  new SlimSelect({
  select: refs.dropDownMenu,
  })
});

refs.dropDownMenu.addEventListener('change', event => {
  refs.container.innerHTML = '';
  refs.loader.hidden = false;

  let targetId = event.target.value;

  fetchCatByBreed(targetId)
    .then(results => {
       refs.loader.hidden = true;
       refs.container.setAttribute("style", "display:flex; gap:20px; flex-direction:row;");

      cantInfoMarkupPic(results.data);
      cantInfoMarkup(results.data[0].breeds);
    })
});
