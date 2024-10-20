import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel with your token
mixpanel.init('240a4a5ced6323f58ef8954774c41e6c', { debug: true });

// Track a page load event
mixpanel.track('Page Loaded');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
