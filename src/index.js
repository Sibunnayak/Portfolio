import React from "react";
// import ReactDOM from "react-dom/client";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import "./App.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

