import React from "react";
import dateFnsFormat from "date-fns/format";
import { Heading } from "../styles";

const CellHeading = props => {
  let content = "";
  switch (props.type) {
    case "dates":
      content = dateFnsFormat(
        new Date(props.item.timestamp),
        "MMM D ddd hh:mma"
      );
      break;
    case "places":
      content = props.item.name;
      break;
    case "menus":
      content = props.item.name;
      break;
    default:
      content = "";
  }

  return <Heading>{content}</Heading>;
};

export default CellHeading;
