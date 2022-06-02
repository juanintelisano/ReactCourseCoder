// import ALGO from 'ruta' (las rutas o paquetes estan en README)

//   1- Traigo la librería de React
import React from 'react'; 

//   2-  Agarrar una aplicacion existente de REACT
import ReactDOM from 'react-dom/client';

//   3-  Traigo la libreria de ReactDOM
/*             import './index.css';                */
import App from './App';
/*      import reportWebVitals from './reportWebVitals';            */

//   4-  Agarrar una aplicacion existente de REACT


//   5- Mostrar la app del DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*              <React.StrictMode>            */
    <App />
 /*               </React.StrictMode>           */ 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


/*          reportWebVitals();             */ 
