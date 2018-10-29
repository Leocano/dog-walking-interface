import { observable, action, decorate } from 'mobx'

class NewDogWalkingStore {
  constructor () {
    this.state = {
      newDogWalking: {
        scheduledDate: '',
        duration: '30',
        pets: []
      }
    }
  }

  setScheduledDate (scheduledDate) {
    this.state.scheduledDate = scheduledDate
  }

  setDuration (duration) {
    this.state.duration = duration
  }

  setPets (pets) {
    
  }
}

decorate(NewDogWalkingStore, {
  state: observable
})

export default NewDogWalkingStore
