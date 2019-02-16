import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import  { gql } from 'apollo-boost';
import { Input, Button } from '../../../styles/common.styles';
import { List, Item, RemoveButton } from './styles';

class Places extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputPlaceName: '',
      inputPlaceURL: ''
    };
  }

  render() {
    const { places, eventId } = this.props;
    const { inputPlaceName, inputPlaceURL } = this.state;

    return (
      <Fragment>
        <Mutation mutation={DELETE_MUTATION}>
          {(deletePlace, { data, loading, error }) => {
            return (
              <List>
                {places && places.map(place => (
                  <Item key={place.id}>
                    <a href={place.url} target="_blank" rel="noreferrer noopener">{place.name}</a>
                    <RemoveButton
                      size="small"
                      onClick={async () => {
                        await deletePlace({
                          variables: { id: place.id },
                        });
                      }}
                    >
                      remove
                    </RemoveButton>
                  </Item>
                ))}
              </List>
            )
          }}
        </Mutation>
        <Mutation
          mutation={CREATE_MUTATION}
          // update={(cache, { data }) => {
          //   const { drafts } = cache.readQuery({ query: DRAFTS_QUERY })
          //   cache.writeQuery({
          //     query: DRAFTS_QUERY,
          //     data: { drafts: drafts.concat([data.createDraft]) },
          //   })
          // }}
        >
          {(createPlace, { data, loading, error }) => {
            return (
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  await createPlace({
                    variables: { name: inputPlaceName, url: inputPlaceURL, event: eventId },
                  });
                  this.setState({ inputPlaceName: '', inputPlaceURL: '' });
                }}
              >
                <Input
                  value={inputPlaceName}
                  type="text"
                  onChange={e => this.setState({ inputPlaceName: e.target.value })}
                  placeholder="Name..."
                />
                <Input
                  value={inputPlaceURL}
                  type="text"
                  onChange={e => this.setState({ inputPlaceURL: e.target.value })}
                  placeholder="URL..."
                />
                <p>
                  <Button
                    type="submit"
                    disabled={!inputPlaceName || !inputPlaceURL}
                  >
                    Add restaurant or place
                  </Button>
                </p>
              </form>
            );
          }}
        </Mutation>
      </Fragment>
    );
  }
}

const CREATE_MUTATION = gql`
  mutation CreateMutation($name: String!, $url: String, $event: ID!) {
    createPlace(name: $name, url: $url, event: $event) {
      id
      name
      url
    }
  }
`;

const DELETE_MUTATION = gql`
  mutation DeleteMutation($id: ID!) {
    deletePlace(id: $id) {
      id
    }
  }
`;

export default Places;
