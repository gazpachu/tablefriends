import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import EventHeader from "./header";
import Edit from "./edit";
import Vote from "./vote";
import { Container, Status, EventBody, Footer } from "./styles";
import Registration from "./registration";
import Summary from "./summary";

class Event extends Component {
  render() {
    return (
      <Query
        query={EVENT_QUERY}
        variables={{ slug: this.props.match.params.slug }}
      >
        {({ data, loading, error }) => {
          if (loading) {
            return (
              <Container>
                <Status>Loading ...</Status>
              </Container>
            );
          }

          if (error) {
            return (
              <Container>
                <Status>An unexpected error occured.</Status>
              </Container>
            );
          }

          let active = "summary";
          const { pathname } = this.props.location;

          if (pathname.includes("/edit")) {
            active = "edit";
          } else if (pathname.includes("/votes")) {
            active = "votes";
          } else if (pathname.includes("/registration")) {
            active = "registration";
          }

          return (
            <Container>
              {data.event ? (
                <Fragment>
                  <EventHeader event={data.event} active={active} />
                  <EventBody>
                    {active === "summary" && <Summary event={data.event} />}
                    {active === "registration" && (
                      <Registration event={data.event} />
                    )}
                    {active === "votes" && <Vote event={data.event} />}
                    {active === "edit" && (
                      <Edit
                        event={data.event}
                        location={this.props.location}
                        history={this.props.history}
                      />
                    )}
                  </EventBody>
                </Fragment>
              ) : null}
              <Footer>
                <span>
                  Found a bug or have a suggestion? Please{" "}
                  <a href="https://github.com/gazpachu/tablefriends/issues">
                    raise an issue in Github
                  </a>
                </span>
              </Footer>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default Event;

export const EVENT_QUERY = gql`
  query EventQuery($slug: String!) {
    event(slug: $slug) {
      id
      slug
      description
      title
      photo
      dates {
        id
        timestamp
      }
      places {
        id
        name
        url
      }
      menus {
        id
        name
        url
      }
      participants {
        id
        name
        dates
        places
        menus
      }
      dateDeadline
      placeDeadline
      menuDeadline
    }
  }
`;
