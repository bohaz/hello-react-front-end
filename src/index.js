import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
