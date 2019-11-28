import axios from 'axios';

class RestService {

  constructor() {
    console.log('ss');
  }

  getItem(itemLink) {
    return axios.get(itemLink);
  };

  handleResponseError(response) {
    throw new Error('HTTP error, status = ' + response.status);
  }

  handleError(error) {
    console.log(error.message);
  }
}
export default RestService;
