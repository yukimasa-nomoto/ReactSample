import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import HelloWorld from './HelloWorld';
import reportWebVitals from './reportWebVitals';
//import CountApp from './CountApp';
//import TodoApp from './TodoApp';
//import TodoApp2 from './TodoApp2';
import TodoApp3 from './TodoApp3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp3 />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
