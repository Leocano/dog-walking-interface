import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import 'bulma/css/bulma.min.css'

import App from './components/App/App'

import rootStore from './stores/rootStore'

ReactDOM.render(
  <BrowserRouter>
    <Provider {...rootStore.stores}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);
