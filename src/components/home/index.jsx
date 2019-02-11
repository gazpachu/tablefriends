import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, List, Item } from './styles';
import slugify from '../../helpers';
import { Button, Input } from '../../styles/common.styles';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    this.titleInput.focus();
 }

  render() {
    return (
      <Container>
        <p>Itadakimasu will help you organise your restaurant event by making your guests vote for:</p>
        <List>
          <Item>A day and time</Item>
          <Item>A restaurant</Item>
          <Item>A menu</Item>
        </List>
        <form onSubmit={() => this.props.history.push(slugify(this.state.title))}>
          <Input
            type="text"
            style={{ minWidth: '60%', marginRight: '5px' }}
            value={this.state.title}
            ref={(input) => { this.titleInput = input; }}
            onChange={e => this.setState({ title: e.target.value })}
            placeholder="Event name..."
          />
          <Button type="submit">Create event</Button>
        </form>
      </Container>
    );
  }
}

export default withRouter(Home);
