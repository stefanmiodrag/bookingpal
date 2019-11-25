import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GlobalStyle from "./GlobalStyle";

import { Nav, SideNav, Page } from "./modules";
import * as page from "./pages";

function App() {
  return (
    <Router>
      <div id="App">
        <GlobalStyle />

        <SideNav />

        <Page>
          <Nav />

          <Switch>
            <Route path="/" exact component={page.Start} />
            <Route path="*" component={page.NotFound} />
          </Switch>
        </Page>

      </div>
    </Router>
  );
}

export default App;
