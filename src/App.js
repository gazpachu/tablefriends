import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GlobalStyles from './styles/app.styles';
import Home from './components/home';
import Event from './components/event';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <div className="app">
          <Router>
            <Fragment>
              <header className="app-header">
                <Link to="/" className="header-link">
                  <h1>Itadakimasu</h1>
                </Link>
                <h2>Organise your restaurant events</h2>
              </header>

              <main>
                <Route exact path="/" component={Home} />
                <Route path="/:id" component={Event} />
              </main>
            </Fragment>
          </Router>
        </div>
      </Fragment>
    );
  }
}

export default App;
