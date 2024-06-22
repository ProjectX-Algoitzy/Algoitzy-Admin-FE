import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ConfirmProvider } from './APP/Common/Confirm/ConfirmContext';
import { AlertProvider } from './APP/Common/Alert/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <ConfirmProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </ConfirmProvider>
    </React.StrictMode>
  </RecoilRoot>
);