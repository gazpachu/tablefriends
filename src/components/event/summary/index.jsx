import React from "react";
import dateFnsFormat from "date-fns/format";
import { PageContainer } from "../../../styles/common.styles";
import { SummaryList } from "../styles";

const Summary = props => {
  const { event } = props;
  return (
    <PageContainer>
      <SummaryList>
        <li>
          Confirmed: <strong>{event.participants.length} attendants</strong>
        </li>
        <li>
          Date: voting{" "}
          <strong>
            {event.dateDeadline &&
              `(until ${dateFnsFormat(
                new Date(event.dateDeadline),
                "MMM D ddd hh:mma"
              )})`}
          </strong>
        </li>
        <li>
          Place or restaurant: voting{" "}
          <strong>
            {event.placeDeadline &&
              `(until ${dateFnsFormat(
                new Date(event.placeDeadline),
                "MMM D ddd hh:mma"
              )})`}
          </strong>
        </li>
        <li>
          Menu(s) / Drinks / Extras: voting / pending to be submitted{" "}
          <strong>
            {event.menuDeadline &&
              `(until ${dateFnsFormat(
                new Date(event.menuDeadline),
                "MMM D ddd hh:mma"
              )})`}
          </strong>
        </li>
      </SummaryList>
    </PageContainer>
  );
};

export default Summary;
