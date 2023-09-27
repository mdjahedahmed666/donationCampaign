import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-20">
      <div className="mb-4">
        <h2 className="text-3xl font-black">404</h2>
      </div>
      <p className="font-medium mb-6">The page you are looking is not found</p>
        <Link to="/">
          <button className="btn btn-accent">Go back to home</button>
        </Link>
    </div>
  );
};

export default ErrorPage;
