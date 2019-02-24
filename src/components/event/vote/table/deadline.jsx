import React from "react";
import dateFnsFormat from "date-fns/format";
import { DeadlineMsg } from "../styles";

const Deadline = props => {
  let date = null;
  switch (props.type) {
    case "dates":
      date = props.event.dateDeadline;
      break;
    case "places":
      date = props.event.placeDeadline;
      break;
    case "menus":
      date = props.event.menuDeadline;
      break;
    default:
      date = null;
  }

  return (
    <DeadlineMsg>
      The deadline for voting for {props.type} is{" "}
      {dateFnsFormat(new Date(date), "MMM D ddd hh:mma")}
    </DeadlineMsg>
  );
};

export default Deadline;
