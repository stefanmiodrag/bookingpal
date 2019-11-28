import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GlobalStyle from "./GlobalStyle";

import { checkIfAuthenticated } from "./api/auth"
import { Nav, SideNav, Container, Page, LoginWrap } from "./modules";
import * as page from "./pages";

function App() {
  return (
    <Router>
      <div id="App">
        <GlobalStyle />

        {checkIfAuthenticated() && <SideNav />}

        <LoginWrap>
          <Page>
            <Nav />

            <Container>
              <Switch>
                <Route path="/" exact component={page.Start} />
                <Route path="/booking/new" exact component={page.NewBooking} />
                <Route path="*" csomponent={page.NotFound} />
              </Switch>
            </Container>
          </Page>
        </LoginWrap>

      </div>
    </Router>
  );
}

export default App;
