import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import DogWalkingsIndex from '../dogWalkings/DogWalkingsIndex/DogWalkingsIndex'
import ShowDogWalkingIndex from '../showDogWalking/ShowDogWalkingIndex/ShowDogWalkingIndex'
import NewDogWalkingIndex from '../newDogWalking/NewDogWalkingIndex/NewDogWalkingIndex'

const App = props => {
  return (
    <Switch>
      <Route path='/' exact component={DogWalkingsIndex} />
      <Route path='/dog-walking/:id' exact component={ShowDogWalkingIndex} />
      <Route path='/novo-dog-walking' exact component={NewDogWalkingIndex} />
      <Route render={() => <div>404</div>} />
    </Switch>
  )
}

export default App
