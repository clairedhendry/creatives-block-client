import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DataProvider} from './Context';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
 <BrowserRouter>
  <DataProvider>
    <App />
  </DataProvider>
 </BrowserRouter>,

  document.getElementById('root')
);

