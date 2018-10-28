import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import './App.css'

import DogWalkingsIndex from '../dogWalkings/DogWalkingsIndex/DogWalkingsIndex'

const App = props => {
  return (
    <Switch>
      <Route path='/' exact component={DogWalkingsIndex} />
      <Route render={() => <div>404</div>} />
    </Switch>
  )
}

export default App
