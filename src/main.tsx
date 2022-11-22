import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextController from './components/GlobalContextController';
import WindowController from './components/WindowController';
import FocusController from './components/FocusController';
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextController>
      <WindowController />
      <FocusController />
      <App />
    </ContextController>
  </React.StrictMode>
);
