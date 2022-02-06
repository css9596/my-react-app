import React from 'react';
import ReactDOM from 'react-dom';
import MyToDoList from './MyToDoList';
import Cleanup from "./Cleanup";
import App from './App';
ReactDOM.render(
  <React.StrictMode>
      {/*<MyToDoList />*/}
      {/*<Cleanup/>*/}
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
