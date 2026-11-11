import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import './styles/global.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(        //ye jitne likhe he root ko sabki access he like App etc
  <Provider store ={store}>
    <AuthProvider>
         <App />
    </AuthProvider>
  </Provider>
);

