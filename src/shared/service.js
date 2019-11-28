class RestService {

  constructor() {
    console.log('ss');
  }

  getItem(itemLink) {
    return true;
  }

  handleResponseError(response) {
    throw new Error('HTTP error, status = ' + response.status);
  }

  handleError(error) {
    console.log(error.message);
  }
}
export default RestService;
