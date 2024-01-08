import '@babel/polyfill';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // Correct import

import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
