import React from "react";

function ErrorComponent({ customMessage = "Error Loading the data" }) {
  return (
    <div className="w-100 m-2 d-flex justify-content-center align-items-center flex-column">
      <i className="fas fa-exclamation-triangle"></i>
      <div className="loading">{customMessage}</div>
    </div>
  );
}

function SmallErrorComponent({ customMessage = "Error Loading the data" }) {
  return (
    <div className="w-100 d-flex align-items-center justify-content-evenly flex-row">
      <i className="fas fa-refresh"></i>
      <div className="mx-2 loading">{customMessage}</div>
    </div>
  );
}

export { ErrorComponent, SmallErrorComponent };
