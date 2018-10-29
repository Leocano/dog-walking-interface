import DogWalkingsStore from './dogWalkingsStore'
import ShowDogWalkingStore from './showDogWalkingStore';
import NewDogWalkingStore from './newDogWalkingStore';

class RootStore {
  constructor () {
    this.stores = {
      dogWalkingsStore: new DogWalkingsStore(),
      showDogWalkingStore: new ShowDogWalkingStore(),
      newDogWalkingStore: new NewDogWalkingStore()
    }
  }
}

export default new RootStore()
