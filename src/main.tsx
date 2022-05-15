import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PostProvider, UIProvider } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostProvider>
      <UIProvider>
        <App />
      </UIProvider>
    </PostProvider>
  </React.StrictMode>
);
