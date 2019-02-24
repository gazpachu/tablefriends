import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import GlobalStyles from "./styles/global.styles";
import Home from "./components/home";
import Event from "./components/event";
import TopNav from "./components/topNav";

const dev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
const client = new ApolloClient({
  uri: dev ? "http://localhost:4000" : "/.netlify/functions/index"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Router>
      <div>
        <TopNav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:slug" component={Event} />
            <Route path="/:slug/registration" component={Event} />
            <Route path="/:slug/votes" component={Event} />
            <Route path="/:slug/edit" component={Event} />
          </Switch>
        </main>
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
