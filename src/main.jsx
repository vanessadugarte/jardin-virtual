import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <App>
              <BrowserRouter basename="/jardin-virtual/">
                  <AppRouter/>
              </BrowserRouter>
          </App>
  </React.StrictMode>,
)
