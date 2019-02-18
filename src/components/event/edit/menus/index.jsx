import React, { Component, Fragment } from 'react';
import { Button, Input, Select } from '../../../../styles/common.styles';

class Menus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputMenu: ''
    };
  }

  render() {
    const { menus } = this.props;
    const { inputMenu } = this.state;

    return (
      <Fragment>
        <Select ref={(select) => { this.selectMenus = select; }}>
          {menus && menus.map(menu => (
            <option key={menu} value={menu}>{menu}</option>
          ))}
        </Select>
        <Button
          disabled={menus.length === 0}
          onClick={() => {
            const newMenus = menus.splice(0);
            newMenus.splice(this.selectMenus.selectedIndex, 1);
            this.props.updateMenus(newMenus);
          }}
        >
          Remove selected
        </Button>
        <Input
          value={inputMenu}
          type="text"
          onChange={e => this.setState({ inputMenu: e.target.value })}
          placeholder="Add new menu..."
        />
        <Button
          disabled={!inputMenu}
          onClick={() => {
            const newMenus = menus.splice(0);
            newMenus.push(inputMenu);
            this.props.updateMenus(newMenus);
            this.setState({ inputMenu: '' });
          }}
        >
          Add menu
        </Button>
      </Fragment>
    );
  }
}

export default Menus;
