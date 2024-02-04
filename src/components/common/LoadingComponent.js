import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingComponent({ customMessage = "Loading..." }) {
  return (
    <div className="w-100 m-2 d-flex justify-content-center align-items-center flex-column">
      <Spinner animation="border" role="status" style={{ color: "white" }} />
      <div className="loading">{customMessage}</div>
    </div>
  );
}

function SmallLoadingComponent({ customMessage = "Loading..." }) {
  return (
    <div className="w-100 d-flex align-items-center justify-content-evenly flex-row">
      <Spinner
        animation="border"
        size="sm"
        role="status"
        style={{ color: "white" }}
      />
      <div className="mx-2 loading">{customMessage}</div>
    </div>
  );
}

export { SmallLoadingComponent, LoadingComponent };
