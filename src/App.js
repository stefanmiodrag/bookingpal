import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GlobalStyle from "./GlobalStyle";

import { checkIfAuthenticated } from "./api/auth"
import store from "./store";
import { init } from "./actions";
import { Nav, SideNav, Container, Page, LoginWrap } from "./modules";
import * as page from "./pages";

function App() {
  // Fetch all data from API endpoints
  checkIfAuthenticated() && store.dispatch(init());

  return (
    <Provider store={store}>
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
                  <Route path="/catalog/new" exact component={page.NewService} />
                  <Route path="/catalog" exact component={page.Service} />
                  <Route path="/user" exact component={page.User} />
                  <Route path="*" csomponent={page.NotFound} />
                </Switch>
              </Container>
            </Page>
          </LoginWrap>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
