import React, { Component, Fragment } from 'react';
import { Button, Input } from '../../../styles/common.styles';
import { List } from './styles';

class Places extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputPlaceName: null,
      inputPlaceURL: null
    };
  }

  render() {
    const { places } = this.props;
    const { inputPlaceName, inputPlaceURL } = this.state;

    return (
      <Fragment>
        <List>
          {places && places.map(place => (
            <li key={place.id}>
              <a href={place.url} target="_blank" rel="noreferrer noopener">{place.name}</a>
              <Button size="small">Remove</Button>
            </li>
          ))}
        </List>
        <Button
          disabled={places.length === 0}
          onClick={() => {
            const newPlaces = places.splice(0);
            newPlaces.splice(this.selectPlaces.selectedIndex, 1);
            this.props.updatePlaces(newPlaces);
          }}
        >
          Remove selected
        </Button>
        <Input
          defaultValue={inputPlaceName}
          type="text"
          onChange={e => this.setState({ inputPlaceName: e.target.value })}
          placeholder="Name..."
        />
        <Input
          defaultValue={inputPlaceURL}
          type="text"
          onChange={e => this.setState({ inputPlaceURL: e.target.value })}
          placeholder="URL..."
        />
        <p>
          <Button
            disabled={!inputPlaceName || !inputPlaceURL}
            onClick={() => {
              const newPlaces = places.splice(0);
              newPlaces.push({
                name: inputPlaceName,
                url: inputPlaceURL
              });
              this.props.updatePlaces(newPlaces);
              this.setState({ inputPlace: null });
            }}
          >
            Add restaurant or place
          </Button>
        </p>
      </Fragment>
    );
  }
}

export default Places;
