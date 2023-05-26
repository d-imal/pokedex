import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/Store.ts';
import { Provider } from 'react-redux';

import App from './App.tsx';

import './styles/reset.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
