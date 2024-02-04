import React, { useEffect, useState } from "react";
import { LoadingComponent } from "../common/LoadingComponent";
import { ErrorComponent } from "../common/ErrorComponent";

function HigherOrderSuspendedComponent({
  isLoading,
  error,
  children,
  loadingComponent = <LoadingComponent />,
  errorComponent = <ErrorComponent />,
}) {
  return (
    <div>
      {isLoading && loadingComponent}
      {error && errorComponent}
      {!isLoading && !error && children}
    </div>
  );
}

export default HigherOrderSuspendedComponent;
