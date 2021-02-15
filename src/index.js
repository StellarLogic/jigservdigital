import React from "react";
import { render } from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import store from "./store";
import AppThemeProvider from "./Theme/AppThemeProvider";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

render(
  <BrowserRouter>
    <Provider store={store}>
      <AppThemeProvider>
        <CssBaseline />
        <App />
      </AppThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
