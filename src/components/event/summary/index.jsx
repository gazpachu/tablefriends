import React from "react";
import dateFnsFormat from "date-fns/format";
import { PageContainer } from "../../../styles/common.styles";

const Summary = props => {
  const { event } = props;
  return (
    <PageContainer>
      <ul>
        <li>
          Confirmed: <strong>{event.participants.length} attendants</strong>
        </li>
        <li>
          Date: pending to be voted{" "}
          <strong>
            {event.dateDeadline &&
              `(until ${dateFnsFormat(
                new Date(event.dateDeadline),
                "MMM D ddd hh:mma"
              )})`}
          </strong>
        </li>
        <li>
          Place or restaurant: pending to be voted{" "}
          <strong>
            {event.placeDeadline &&
              `(until ${dateFnsFormat(
                new Date(event.placeDeadline),
                "MMM D ddd hh:mma"
              )})`}
          </strong>
        </li>
        <li>
          Menu(s): pending to be voted{" "}
          <strong>
            {event.menuDeadline &&
              `(until ${dateFnsFormat(
                new Date(event.menuDeadline),
                "MMM D ddd hh:mma"
              )})`}
          </strong>
        </li>
      </ul>
    </PageContainer>
  );
};

export default Summary;
