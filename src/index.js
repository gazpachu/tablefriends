import React from 'react';
import ReactDOM from 'react-dom';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import GlobalStyles from './styles/global.styles';
import Home from './components/home';
import Event from './components/event';

const client = new ApolloClient({ uri: 'http://localhost:4000' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to="/" className="header-link">
            <h1>TABLE.FRIENDS</h1>
          </Link>
          <h2>Organise your restaurant events</h2>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:slug" component={Event} />
            <Route path="/:slug/edit" component={Event} />
          </Switch>
        </main>
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
