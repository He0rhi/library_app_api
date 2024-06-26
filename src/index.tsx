import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Element with id "root" not found in the DOM');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
  <App />
</Provider>
);
