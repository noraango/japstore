import React from "react";
import RecorDetail from "./RecorDetail";

export default function ProductOverview({ listRequest }) {
  return (
    <>
      {listRequest.map((record, key) => (
        <RecorDetail key={key} record={record} />
      ))}
    </>
  );
}
