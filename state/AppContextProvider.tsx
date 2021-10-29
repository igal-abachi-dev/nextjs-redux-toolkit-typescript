import {} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import store from './store';



// @ts-ignore
export function AppContextProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}


