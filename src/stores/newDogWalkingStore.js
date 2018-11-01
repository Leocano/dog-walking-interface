import { observable, action, decorate, computed } from 'mobx'
import moment from 'moment'

class NewDogWalkingStore {
  constructor () {
    this.state = {
      newDogWalking: {
        scheduledDate: moment().startOf('day'),
        duration: 30,
        pets: [],
        location: '',
        lat: '',
        lng: ''
      }
    }
  }

  get price () {
    if (this.state.newDogWalking.duration == 30) {
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
}

decorate(NewDogWalkingStore, {
  state: observable
})

export default NewDogWalkingStore
