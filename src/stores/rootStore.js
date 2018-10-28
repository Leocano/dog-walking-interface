import DogWalkingsStore from './dogWalkingsStore'

class RootStore {
  constructor () {
    this.stores = {
      dogWalkingsStore: new DogWalkingsStore()
    }
  }
}

export default new RootStore()
