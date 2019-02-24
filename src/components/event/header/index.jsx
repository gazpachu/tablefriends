import React from "react";
import { Header, Title, MainNav, MainTabLink } from "./styles";
import { NavItem, TabIcon } from "../../../styles/common.styles";

function EventHeader(props) {
  return (
    <Header>
      <Title>{props.event.title}</Title>
      <MainNav>
        <NavItem>
          <MainTabLink
            active={props.active === "summary" ? 1 : 0}
            to={`/${props.event.slug}`}
          >
            <TabIcon className="fas fa-home" />
            Summary
          </MainTabLink>
        </NavItem>
        <NavItem>
          <MainTabLink
            active={props.active === "registration" ? 1 : 0}
            to={`/${props.event.slug}/registration`}
          >
            <TabIcon className="fas fa-user" />
            Registration
          </MainTabLink>
        </NavItem>
        <NavItem>
          <MainTabLink
            active={props.active === "votes" ? 1 : 0}
            to={`/${props.event.slug}/votes`}
          >
            <TabIcon className="fas fa-vote-yea" />
            Votes
          </MainTabLink>
        </NavItem>
        <NavItem>
          <MainTabLink
            active={props.active === "edit" ? 1 : 0}
            to={`/${props.event.slug}/edit`}
          >
            <TabIcon className="fas fa-edit" />
            Edit event
          </MainTabLink>
        </NavItem>
      </MainNav>
    </Header>
  );
}

export default EventHeader;
