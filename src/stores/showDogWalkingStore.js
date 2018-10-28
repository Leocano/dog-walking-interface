import { observable, action, decorate } from 'mobx'
import axios from 'axios'

class ShowDogWalkingStore {
  constructor () {
    this.state = {
      dogWalking: {},
      isFetching: false
    }
  }

  fetchDogWalking (id) {
    this.state.isFetching = true
    const url = `http://localhost:3000/dog_walkings/${id}`
    axios.get(url)
      .then(response => {
        console.log(response)
        this.state.dogWalking = response.data
        this.state.isFetching = false
      })
      .catch(error => {
        console.log(error)
        this.state.isFetching = false
      })
  }
}

decorate(ShowDogWalkingStore, {
  state: observable,
  fetchDogWalking: action
})

export default ShowDogWalkingStore
