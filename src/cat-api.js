import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_fRWteppQp5QuzzEUJhf1msveKO9JBnOqUGQgzkqPKAfAKyfAENHU7maeb3sfPrvh";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function fetchBreeds() {
return axios.get('https://api.thecatapi.com/v1/breeds')
   .then((resp) => {
      return resp;
   }
)
   .catch(() => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
   }
   );
};

function fetchCatByBreed (breedId) {
   return axios.get('https://api.thecatapi.com/v1/images/search', {
      params: {
         breed_ids: breedId
      }
   })
      
      .then((resp) => { 
         return resp;
      })

      .catch(() => { Notify.failure('Oops! Something went wrong! Try reloading the page!'); })
};


export {fetchBreeds, fetchCatByBreed};

