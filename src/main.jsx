import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { NextUIProvider } from "@nextui-org/react";

import { BrowserRouter } from "react-router-dom";

import { reducers } from "./store";
import { Provider } from "react-redux";
import { createStore } from "redux";
const store = createStore(reducers);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NextUIProvider>
    </Provider>
  </StrictMode>
);

// Chapter 6 Performance Optimization - Menit : 16.30
