import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCmEjyRWgGriXMOMYwa8zoTKloU7BLo7uk',
  authDomain: 'coderhouse-ecommerce-d24ca.firebaseapp.com',
  projectId: 'coderhouse-ecommerce-d24ca',
  storageBucket: 'coderhouse-ecommerce-d24ca.appspot.com',
  messagingSenderId: '413598089589',
  appId: '1:413598089589:web:6b90b80fb391e0568cd33c',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
