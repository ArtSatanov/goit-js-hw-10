import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_fRWteppQp5QuzzEUJhf1msveKO9JBnOqUGQgzkqPKAfAKyfAENHU7maeb3sfPrvh";

function fetchBreeds() {
return axios.get('https://api.thecatapi.com/v1/breeds')
   .then((resp) => {
      console.log(resp)
      return resp;
   }
)
   .catch(() => {
      console.log('Something went wrong!!!');
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
         console.log(resp)
         return resp;
      })

      .catch(() => { console.log("Error")})
};


export {fetchBreeds, fetchCatByBreed};

