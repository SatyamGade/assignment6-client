import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import {JWTProvider} from "./contexts/JwtProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <JWTProvider>
    <React.StrictMode>
      <App />
      <ToastContainer autoClose={1700}/>
    </React.StrictMode>
  </JWTProvider>,
);

