import { observable, action, decorate } from 'mobx'
import axios from 'axios'

class DogWalkingsStore {
  constructor () {
    this.state = {
      dogWalkings: [],
      fetchAll: false,
      isFetching: false
    }
    this.fetchAllDogWalkings()
  }

  fetchAllDogWalkings () {
    this.state.isFetching = true
    const url = 'http://localhost:3000/dog_walkings'
    axios.get(url,{
      params: {
        all: this.state.fetchAll
      }
    })
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

  toggleFetchAll () {
    this.state.fetchAll = !this.state.fetchAll
    this.fetchAllDogWalkings()
  }
}

decorate(DogWalkingsStore, {
  state: observable,
  fetchAllDogWalkings: action,
  toggleFetchAll: action
})

export default DogWalkingsStore
