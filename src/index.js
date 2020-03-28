import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./components/App";
//import * as serviceWorker from './serviceWorker';

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

const root = document.getElementById("root");
/*
const elemento = React.createElement(
  "h1",
  { className: "saludo" },
  "Hola Mundo"
);
*/

//ReactDOM.render(<h1 className="saludos">Hola Mundo</h1>, root);
ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
