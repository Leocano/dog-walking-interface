import { observable, action, decorate, computed } from 'mobx'
import moment from 'moment'

class NewDogWalkingStore {
  constructor () {
    this.state = {
      newDogWalking: {
        scheduledDate: moment().startOf('day'),
        duration: '30',
        pets: []
      }
    }
  }

  get price () {
    if (this.state.duration === 30) {
      return 25 + ((this.state.newDogWalking.pets.length - 1) * 15)
    } else {
      return 35 + ((this.state.newDogWalking.pets.length - 1) * 25)
    }
  }

  setScheduledDate (scheduledDate) {
    this.state.newDogWalking.scheduledDate = scheduledDate
  }

  setDuration (duration) {
    this.state.newDogWalking.duration = duration
  }

  setPets (pets) {
    this.pets = pets
  }
}

decorate(NewDogWalkingStore, {
  state: observable,
  price: computed
})

export default NewDogWalkingStore
