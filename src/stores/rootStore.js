import DogWalkingsStore from './dogWalkingsStore'
import ShowDogWalkingStore from './showDogWalkingStore';

class RootStore {
  constructor () {
    this.stores = {
      dogWalkingsStore: new DogWalkingsStore(),
      showDogWalkingStore: new ShowDogWalkingStore()
    }
  }
}

export default new RootStore()
