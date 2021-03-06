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
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
        this.state.isFetching = false
      })
  }

  startDogWalking () {
    const { id } = this.state.dogWalking
    const url = `http://localhost:3000/dog_walkings/${id}/start_walk`
    axios.post(url)
      .then(response => {
        console.log(response)
        this.fetchDogWalking(id)
      })
      .catch(error => {
        console.log(error)
      })
  }

  finishDogWalking () {
    const { id } = this.state.dogWalking
    const url = `http://localhost:3000/dog_walkings/${id}/finish_walk`
    axios.post(url)
      .then(response => {
        console.log(response)
        this.fetchDogWalking(id)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

decorate(ShowDogWalkingStore, {
  state: observable,
  fetchDogWalking: action
})

export default ShowDogWalkingStore
