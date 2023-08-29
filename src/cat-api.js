import axios from "axios";
function fetchBreeds() {
axios({
  method: 'get',
  url: 'https://api.thecatapi.com/v1/breeds',
})
   .then((resp) => {
      // console.log(resp);
      console.log(resp.data);
      return resp.data;
   }
   )
   .catch(() => {
      console.log('Something went wrong!!!');
   }
   );
};


export {fetchBreeds};

