import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
let container=  document.getElementById('root')
let root =ReactDOM.createRoot(container)
root.render(<App/>)
reportWebVitals();