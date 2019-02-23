import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import GlobalStyles from './styles/global.styles';
import { App, AppHeader, AppHeaderLink, Title, Subtitle } from './styles/app.styles';
import Home from './components/home';
import Event from './components/event';

const dev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const client = new ApolloClient({ uri: dev ? 'http://localhost:4000' : '/.netlify/functions/index' });

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Router>
      <App>
        <AppHeader>
          <AppHeaderLink to="/">
            <Title>TABLE.FRIENDS</Title>
          </AppHeaderLink>
          <Subtitle>Organise your restaurant events</Subtitle>
        </AppHeader>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:slug" component={Event} />
            <Route path="/:slug/edit" component={Event} />
          </Switch>
        </main>
      </App>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
