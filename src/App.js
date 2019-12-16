import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GlobalStyle from "./GlobalStyle";

import store from "./store";
import { init, checkIfAuthenticated } from "./actions";
import { SideNav, LoginWrap } from "./modules";

function App() {
  store.dispatch(checkIfAuthenticated()); // Check if user is authenticated
  store.dispatch(init()); // Fetch all data from API endpoints

  return (
    <Provider store={store}>
      <Router>
        <div id="App">
          <GlobalStyle />

          <SideNav />

          <LoginWrap />

        </div>
      </Router>
    </Provider>
  );
}

export default App;
