import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './providers/DataContext';
import { BrowserRouter } from 'react-router-dom';
import { OrderProvider } from './providers/OrdersContext';
import AccessProvider from './providers/AccessProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>

    <AccessProvider>
      <OrderProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </OrderProvider>
    </AccessProvider>

  </BrowserRouter>
);

reportWebVitals();
