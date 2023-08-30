import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_fRWteppQp5QuzzEUJhf1msveKO9JBnOqUGQgzkqPKAfAKyfAENHU7maeb3sfPrvh";

import { fetchBreeds } from "./cat-api.js";


const refs = {
dropDownMenu: document.querySelector ('.breed-select'),
};

// const test = fetchBreeds();

// console.log(test);

function catsSelectorMarkup(arr) {
   const markup = arr.map(({ id, name }) => { `<option value="${id}">${name}</option>` }).join('');
   refs.dropDownMenu.insertAdjacentHTML('beforeend', markup);
}




// fetchBreeds({ id, name }) {
   
// };


