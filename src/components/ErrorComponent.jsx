import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const { error, status } = useRouteError();
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="font-extrabold animation-text text-9xl">Oops!</h1>
        <p className="text-2xl text-center font-bold my-3">
          {status} - {error.message}
        </p>
        <p className="font-bold text-lg">
          The page you are looking for might have been removed <br /> had its
          name changed or its temporary unavailable
        </p>
        <Link to="/">
          <button className="gradient-button"> Go To HomePage</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorComponent;
