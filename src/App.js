import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GlobalStyle from "./GlobalStyle";

import { Nav, SideNav } from "./modules";
import * as page from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />

        <SideNav />

        <Switch>
          <Route path="/" component={page.StartPage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
