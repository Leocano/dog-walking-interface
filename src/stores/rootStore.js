import DogWalkingsStore from './dogWalkingsStore'
import ShowDogWalkingStore from './showDogWalkingStore';
import NewDogWalkingStore from './newDogWalkingStore';
import PetsStore from './petsStore';

class RootStore {
  constructor () {
    this.stores = {
      dogWalkingsStore: new DogWalkingsStore(),
      showDogWalkingStore: new ShowDogWalkingStore(),
      newDogWalkingStore: new NewDogWalkingStore(),
      petsStore: new PetsStore()
    }
  }
}

export default new RootStore()
