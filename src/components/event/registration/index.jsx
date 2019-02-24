import React from "react";
import Register from "../registration/register";
import UnRegister from "../registration/unregister";

const Registration = props => {
  const { event } = props;
  return (
    <div>
      <Register event={event} />
      <UnRegister event={event} participants={event.participants} />
    </div>
  );
};

export default Registration;
