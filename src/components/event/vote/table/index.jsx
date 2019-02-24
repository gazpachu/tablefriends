import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import CellHeading from "./cellHeading";
import { Table, Cell, UserIcon } from "../styles";

class VoteTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saving: false
    };

    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal(id) {
    const { participants, type } = this.props;
    let total = 0;

    for (let i = 0; i < participants.length; i += 1) {
      const items = participants[i][type].filter(j => j === id);
      total += items ? items.length : 0;
    }

    return `${total} vote${total > 1 || total === 0 ? "s" : ""}`;
  }

  render() {
    const { event, type, participants, mutation } = this.props;
    const items = event[type];

    if (items.length === 0) {
      return (
        <span>
          This event still has no {type}.{" "}
          <Link to={`${event.slug}/edit?section=${type}`}>Add a new one</Link>
        </span>
      );
    }

    return (
      <Fragment>
        <Mutation
          mutation={mutation}
          update={(cache, { data }) => {
            this.setState({ saving: false });
            // const { events } = cache.readQuery({ query: EVENTS_QUERY });
            // cache.writeQuery({
            //   query: EVENTS_QUERY,
            //   data: { events: events.concat([data.updateEvent]) },
            // });
          }}
        >
          {(updateParticipant, { data, loading, error }) => {
            return (
              <Table>
                <thead>
                  <tr>
                    <Cell />
                    {items &&
                      items.map(item => (
                        <CellHeading
                          key={`${item.id}-heading`}
                          item={item}
                          type={type}
                        />
                      ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Cell>{participants.length} participants</Cell>
                    {items &&
                      items.map(item => (
                        <Cell key={`${item.id}-participant`}>
                          {this.calculateTotal(item.id)}
                        </Cell>
                      ))}
                  </tr>
                  {participants &&
                    participants.map(participant => (
                      <tr key={participant.id}>
                        <Cell style={{ textAlign: "left" }}>
                          <UserIcon className="fas fa-user-circle" />
                          {participant.name}
                        </Cell>
                        {items &&
                          items.map(item => (
                            <Cell key={`${item.id}-cell`}>
                              <input
                                type="checkbox"
                                defaultChecked={participant[type].find(
                                  id => id === item.id
                                )}
                                onChange={async () => {
                                  this.setState({ saving: true });
                                  const newItems = participant[type]
                                    ? participant[type].splice(0)
                                    : [];
                                  let found = false;
                                  for (let i = 0; i < newItems.length; i += 1) {
                                    if (newItems[i] === item.id) {
                                      newItems.splice(i, 1);
                                      found = true;
                                    }
                                  }
                                  if (!found) {
                                    newItems.push(item.id);
                                  }
                                  await updateParticipant({
                                    variables: {
                                      id: participant.id,
                                      [type]: newItems
                                    }
                                  });
                                }}
                              />
                            </Cell>
                          ))}
                      </tr>
                    ))}
                </tbody>
              </Table>
            );
          }}
        </Mutation>
      </Fragment>
    );
  }
}

export default VoteTable;
