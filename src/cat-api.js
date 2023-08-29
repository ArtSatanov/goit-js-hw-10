import axios from "axios";
function fetchBreeds() {
axios({
  method: 'get',
  url: 'https://api.thecatapi.com/v1/breeds',
})
   .then((resp) => {
      // console.log(resp);
      return resp.data[0].id;
   }
   )
   .catch(() => {
      console.log('Something went wrong!!!');
   }
   );
};


export {fetchBreeds};

