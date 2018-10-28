import { observable, action, decorate } from 'mobx'
import axios from 'axios'

class DogWalkingsStore {
  constructor () {
    this.state = {
      dogWalkings: [],
      isFetching: false
    }
    this.fetchAllDogWalkings()
  }

  fetchAllDogWalkings () {
    this.state.isFetching = true
    const url = 'http://localhost:3000/dog_walkings'
    axios.get(url)
      .then(response => {
        console.log(response)
        this.state.dogWalkings = response.data
        this.state.isFetching = false
      })
      .catch(error => {
        console.log(error)
        this.state.isFetching = false
      })
  }
}

decorate(DogWalkingsStore, {
  state: observable
})

export default DogWalkingsStore
