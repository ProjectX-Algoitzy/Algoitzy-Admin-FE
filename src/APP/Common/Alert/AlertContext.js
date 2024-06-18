import React, { createContext, useState } from 'react';
import Alert from './Alert';

const AlertContext = createContext({
  alert: () => new Promise((_, reject) => reject()),
});

const AlertProvider = ({ children }) => {
  const [state, setState] = useState(null);

  const alert = (title = '', message = '') => {
    return new Promise((resolve) => {
      setState({
        title,
        message,
        onClickOK: () => {
          setState(null);
          resolve(true);
        },
      });
    });
  };

  return (
    <AlertContext.Provider value={{ alert }}>
      {children}
      {state && (
        <Alert
          title={state.title}
          message={state.message}
          onClickOK={state.onClickOK}
        />
      )}
    </AlertContext.Provider>
  );
};

export { AlertContext, AlertProvider };