import React, { Component, Fragment } from 'react';
import dateFnsFormat from 'date-fns/format';
import { Button, Input, Select } from '../../../styles/common.styles';

class Dates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputDate: null
    };
  }

  render() {
    const { dates } = this.props;
    const { inputDate } = this.state;

    return (
      <Fragment>
        <Select ref={(select) => { this.selectDates = select; }}>
          {dates && dates.map(date => (
            <option key={date} value={date}>{dateFnsFormat(new Date(date), 'Do MMMM YYYY, hh:mma')}</option>
          ))}
        </Select>
        <Button
          disabled={dates.length === 0}
          onClick={() => {
            const newDates = dates.splice(0);
            newDates.splice(this.selectDates.selectedIndex, 1);
            this.props.updateDates(newDates);
          }}
        >
          Remove selected
        </Button>
        <Input
          defaultValue={inputDate}
          type="datetime-local"
          onChange={e => this.setState({ inputDate: e.target.value })}
          placeholder="Add new date..."
        />
        <Button
          disabled={!inputDate}
          onClick={() => {
            const newDates = dates.splice(0);
            newDates.push(inputDate);
            this.props.updateDates(newDates);
            this.setState({ inputDate: null });
          }}
        >
          Add date and time
        </Button>
      </Fragment>
    );
  }
}

export default Dates;
