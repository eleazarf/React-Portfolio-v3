// Import necessary modules and styles
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // Import the 'App' component

// Create a root for rendering the React app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app within a 'React.StrictMode' component
root.render(
  <React.StrictMode>
    <App /> {/* Render the 'App' component */}
  </React.StrictMode>
);
