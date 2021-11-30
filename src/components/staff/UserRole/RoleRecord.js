import React from "react";
import RecorDetail from "./RecorDetail";

export default function ProductOverview({ listRequest }) {
  return (
    <>
      {listRequest.map((record) => (
        <RecorDetail key={record} record={record} />
      ))}
    </>
  );
}
