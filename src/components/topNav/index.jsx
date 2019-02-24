import React, { Component } from "react";
import { AppHeader, AppHeaderLink, Title } from "./styles";

class TopNav extends Component {
  render() {
    return (
      <AppHeader>
        <AppHeaderLink to="/">
          <Title>TABLE.FRIENDS</Title>
        </AppHeaderLink>
      </AppHeader>
    );
  }
}

export default TopNav;
