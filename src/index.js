import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import RoomContextProvider from './context/RoomContext'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RoomContextProvider>
      <Router>
        <App />
      </Router>
    </RoomContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
