import { observable, action, decorate } from 'mobx'

class NewDogWalkingStore {
  constructor () {
    this.state = {
      newDogWalking: {
        scheduledDate: '',
        duration: '30'
      }
    }
  }

  setScheduledDate (scheduledDate) {
    this.state.scheduledDate = scheduledDate
  }

  setDuration (duration) {
    this.state.duration = duration
  }
}

decorate(NewDogWalkingStore, {
  state: observable
})

export default NewDogWalkingStore
