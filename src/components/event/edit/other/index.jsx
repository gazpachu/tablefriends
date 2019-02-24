import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { EVENT_QUERY } from "../..";
import {
  PageContainer,
  Label,
  Input,
  Button,
  Info
} from "../../../../styles/common.styles";
import { List, Item, RemoveButton } from "./styles";

class Other extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: "",
      inputURL: "",
      status: ""
    };
  }

  render() {
    const { type, items, event } = this.props;
    const { inputName, inputURL, status } = this.state;

    return (
      <PageContainer>
        <h3>Add or remove {type} to vote for</h3>
        <Mutation
          mutation={
            type === "places" ? DELETE_PLACE_MUTATION : DELETE_MENU_MUTATION
          }
          update={(cache, { data }) => {
            const typeData =
              type === "places" ? data.deletePlace : data.deleteMenu;
            this.setState({
              inputName: "",
              inputURL: "",
              status: `${typeData.name} was removed from the ${type}.`
            });
            const cachedEvent = cache.readQuery({
              query: EVENT_QUERY,
              variables: { slug: event.slug }
            });
            cachedEvent.event[type] = cachedEvent.event[type].filter(
              item => item.id !== typeData.id
            );
            cache.writeQuery({
              query: EVENT_QUERY,
              data: { event: cachedEvent.event }
            });
          }}
        >
          {(deleteData, { data, loading, error }) => {
            return (
              <List>
                {items &&
                  items.map(item => (
                    <Item key={item.id}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {item.name}
                      </a>
                      <RemoveButton
                        size="small"
                        onClick={async () => {
                          await deleteData({
                            variables: { id: item.id }
                          });
                        }}
                      >
                        remove
                      </RemoveButton>
                    </Item>
                  ))}
              </List>
            );
          }}
        </Mutation>
        <Mutation
          mutation={
            type === "places" ? CREATE_PLACE_MUTATION : CREATE_MENU_MUTATION
          }
          update={(cache, { data }) => {
            const typeData =
              type === "places" ? data.createPlace : data.createMenu;
            this.setState({
              inputName: "",
              inputURL: "",
              status: `${typeData.name} was added to the ${type}.`
            });
            const cachedEvent = cache.readQuery({
              query: EVENT_QUERY,
              variables: { slug: event.slug }
            });
            cachedEvent.event[type] = cachedEvent.event[type].concat(typeData);
            cache.writeQuery({
              query: EVENT_QUERY,
              data: { event: cachedEvent.event }
            });
          }}
        >
          {(createData, { data, loading, error }) => {
            return (
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  await createData({
                    variables: {
                      name: inputName,
                      url: inputURL,
                      event: event.id
                    }
                  });
                  this.setState({ inputName: "", inputURL: "" });
                }}
              >
                <p>
                  <Label>Name</Label>
                  <Input
                    value={inputName}
                    type="text"
                    onChange={e => this.setState({ inputName: e.target.value })}
                    placeholder="Name..."
                  />
                </p>
                <p>
                  <Label>URL</Label>
                  <Input
                    value={inputURL}
                    type="text"
                    onChange={e => this.setState({ inputURL: e.target.value })}
                    placeholder="URL..."
                  />
                  <Info>
                    The URL can link to a website
                    {type === "places"
                      ? ", a GoogleMaps link"
                      : ", picture, PDF"}{" "}
                    or anything you want
                  </Info>
                </p>
                <p>
                  <Button type="submit" disabled={!inputName || !inputURL}>
                    Add {type === "places" ? "restaurant or place" : "menu"}
                  </Button>
                </p>
              </form>
            );
          }}
        </Mutation>
        <Info>{status}</Info>
      </PageContainer>
    );
  }
}

const CREATE_PLACE_MUTATION = gql`
  mutation CreatePlaceMutation($name: String!, $url: String, $event: ID!) {
    createPlace(name: $name, url: $url, event: $event) {
      id
      name
      url
    }
  }
`;

const DELETE_PLACE_MUTATION = gql`
  mutation DeletePlaceMutation($id: ID!) {
    deletePlace(id: $id) {
      id
      name
    }
  }
`;

const CREATE_MENU_MUTATION = gql`
  mutation CreateMenuMutation($name: String!, $url: String, $event: ID!) {
    createMenu(name: $name, url: $url, event: $event) {
      id
      name
      url
    }
  }
`;

const DELETE_MENU_MUTATION = gql`
  mutation DeleteMenuMutation($id: ID!) {
    deleteMenu(id: $id) {
      id
      name
    }
  }
`;

export default Other;
