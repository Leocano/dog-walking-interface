import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import App from './components/App'

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);
