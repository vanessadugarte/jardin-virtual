import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter.jsx";
import Navbar from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Navbar/>
          <AppRouter />
      </BrowserRouter>

  </React.StrictMode>,
)
