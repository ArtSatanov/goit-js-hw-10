import axios from "axios";
function fetchBreeds() {
return axios.get('https://api.thecatapi.com/v1/breeds')
   .then((resp) => {
      console.log(resp);
      return resp;
   }
)
   .catch(() => {
      console.log('Something went wrong!!!');
   }
   );
};


export {fetchBreeds};

