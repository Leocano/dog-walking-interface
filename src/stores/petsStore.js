import { observable, action, decorate } from 'mobx'
import axios from 'axios'

class PetsStore {
  constructor () {
    this.state = {
      pets: []
    }
    this.fetchAllPets()
  }

  fetchAllPets () {
    const url = 'http://localhost:3000/pets'
    axios.get(url)
      .then(response => {
        this.state.pets = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

decorate(PetsStore, {
  state: observable
})

export default PetsStore
