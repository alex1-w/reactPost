import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './providers/DataContext';
import { BrowserRouter } from 'react-router-dom';
import { OrderProvider } from './providers/OrdersContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  
    <OrderProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </OrderProvider>

  </BrowserRouter>
);

reportWebVitals();
