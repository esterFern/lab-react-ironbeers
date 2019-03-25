import axios from 'axios';

class BeersService{
  constructor(){
    this.api = axios.create({
      baseURL:'https://ironbeer-api.herokuapp.com/beers'
    })
  }

  getAll() {
    return this.api.get('/all')
      .then(({data}) => data)
  }

  getBeer(id) {
    return this.api.get(`/single/${id}`)
      .then(({data}) => data)
  }

  getRandomBeer() {
    return this.api.get(`/random`)
      .then(({data}) => data)
  }

  searchBeers(query) {
    return this.api.get(`/search?q=${query}`)
      .then(({data}) => data)
  }
}

const beersService = new BeersService();
export default beersService;