import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ConfirmProvider } from './APP/Common/Confirm/ConfirmContext';
import { AlertProvider } from './APP/Common/Alert/AlertContext';
import { LoadingProvider } from './APP/Common/Loading/LoadingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <ConfirmProvider>
        <AlertProvider>
          <LoadingProvider>
             <BrowserRouter>
                <App />
              </BrowserRouter>
          </LoadingProvider>
        </AlertProvider>
      </ConfirmProvider>
    </React.StrictMode>
  </RecoilRoot>
);