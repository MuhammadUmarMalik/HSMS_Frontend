// Unauthorized.js
import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div>
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
      {/* <Link to="/">Go to Login</Link> */}
    </div>
  );
};

export default Unauthorized;