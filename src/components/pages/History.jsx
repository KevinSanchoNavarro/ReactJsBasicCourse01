import React from "react";

const History = ({ match, location, history }) => (
  <>
    <div>{JSON.stringify(match)}</div>
    <div>{JSON.stringify(location)}</div>
  </>
);

export default History;
