import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './JS/store/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>
    );

