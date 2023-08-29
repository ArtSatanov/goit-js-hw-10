import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_fRWteppQp5QuzzEUJhf1msveKO9JBnOqUGQgzkqPKAfAKyfAENHU7maeb3sfPrvh";

import { fetchBreeds } from "./cat-api.js";


const refs = {
dropDownMenu: document.querySelector ('.breed-select'),
};

fetchBreeds();

// console.log(fetchBreeds())