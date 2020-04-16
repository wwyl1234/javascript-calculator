import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Calculator from './Calculator';
import store from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
      <Calculator />
    </Provider>,
  document.getElementById('root')
);
