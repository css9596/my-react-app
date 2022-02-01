import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cleanup from "./Cleanup";

ReactDOM.render(
  <React.StrictMode>
      <App />
      {/*<Cleanup/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
