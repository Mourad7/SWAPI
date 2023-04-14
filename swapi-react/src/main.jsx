import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// create a root element to render the app into
const rootElement = document.getElementById('root');

// create a React root using the `createRoot` method
// this enables async rendering and other features
const root = ReactDOM.createRoot(rootElement);

// render the app inside the root element
// wrapping it in `React.StrictMode` to enable additional development features
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
