import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_fRWteppQp5QuzzEUJhf1msveKO9JBnOqUGQgzkqPKAfAKyfAENHU7maeb3sfPrvh";

import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";


const refs = {
   dropDownMenu: document.querySelector('.breed-select'),
   container: document.querySelector('.cat-info'),
   loader: document.querySelector('.loader'),
   error: document.querySelector('.error')
};

function catsSelectorMarkup(arr) {
   const markup = arr.map(({ id,name }) => `<option value="${id}">${name}</option>` ).join('');
   refs.dropDownMenu.insertAdjacentHTML('beforeend', markup);
}

function canInfoMarkup(arr) {
   const markup = arr.map(({ url }) => `<img src="${url}" alt="Cat" width="300" style="margin-top:20px">` ).join('');
   refs.container.insertAdjacentHTML('beforeend', markup)
}

fetchBreeds() 
   .then((results) => {
      catsSelectorMarkup(results.data);
   }
)


refs.dropDownMenu.addEventListener('change', (event) => {
   refs.container.innerHTML = '';
   refs.loader.hidden = false;
   
   let targetId = event.target.value
   console.log(targetId);

   fetchCatByBreed(targetId)
      .then((results) => {
         refs.loader.hidden = true; 
         canInfoMarkup(results.data);

      })
      .catch(() => { 
         refs.error.hidden = true;
      })
})


