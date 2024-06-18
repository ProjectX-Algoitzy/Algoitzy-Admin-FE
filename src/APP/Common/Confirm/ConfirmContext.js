import React, { createContext, useState } from 'react';
import Confirm from './Confirm';

const ConfirmContext = createContext({
  confirm: () => new Promise((_, reject) => reject()),
});

const ConfirmProvider = ({ children }) => {
  const [state, setState] = useState(null);

  const confirm = (title = '', message = '') => {
    return new Promise((resolve) => {
      setState({
        title,
        message,
        onClickOK: () => {
          setState(null);
          resolve(true);
        },
        onClickCancel: () => {
          setState(null);
          resolve(false);
        },
      });
    });
  };

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}
      {state && (
        <Confirm
          title={state.title}
          message={state.message}
          onClickOK={state.onClickOK}
          onClickCancel={state.onClickCancel}
        />
      )}
    </ConfirmContext.Provider>
  );
};

export { ConfirmContext, ConfirmProvider };