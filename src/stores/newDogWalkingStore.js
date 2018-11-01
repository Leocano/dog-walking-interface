import { observable, action, decorate, computed } from 'mobx'
import moment from 'moment'
import axios from 'axios';

class NewDogWalkingStore {
  constructor () {
    this.state = {
      newDogWalking: {
        scheduledDate: moment().startOf('day'),
        duration: '30',
        pets: [],
        location: '',
        lat: '',
        lng: '',
      },
      isCreating: false
    }
  }

  get price () {
    if (this.state.newDogWalking.duration === '30') {
      return 25 + (Math.max(0,(this.state.newDogWalking.pets.length - 1)) * 15)
    }
    return 35 + (Math.max(0,(this.state.newDogWalking.pets.length - 1)) * 25)
  }

  setScheduledDate (scheduledDate) {
    this.state.newDogWalking.scheduledDate = scheduledDate
  }

  setDuration (duration) {
    this.state.newDogWalking.duration = duration
  }

  setPets (pets) {
    this.state.newDogWalking.pets = pets
  }

  setLocation (location) {
    this.state.newDogWalking.location = location
  }

  setLatLng (latLng) {
    this.state.newDogWalking.lat = latLng.lat
    this.state.newDogWalking.lng = latLng.lng
  }

  createDogWalking (event) {
    event.preventDefault()
    this.state.isCreating = true
    const url = 'http://localhost:3000/dog_walkings'
    const { scheduledDate, duration, lat, lng, pets } = this.state.newDogWalking
    axios.post(url, {
      dog_walking: {
        scheduled_date: scheduledDate.format(),
        price: this.price,
        duration: duration,
        latitude: lat,
        longitude: lng,
        start_time: null,
        finish_time: null
      },
      pet_ids: pets.map(pet => pet.id)
    })
    .then(response => {
      console.log(response)
      this.state.isCreating = false
    })
    .catch(error => {
      console.log(error)
      this.state.isCreating = false
    })
  }
}

decorate(NewDogWalkingStore, {
  state: observable
})

export default NewDogWalkingStore
