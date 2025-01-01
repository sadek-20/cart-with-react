import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './ShopContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ShopProvider>

    <BrowserRouter>
      <App />
    </BrowserRouter>

    </ShopProvider>

  </React.StrictMode>
);

