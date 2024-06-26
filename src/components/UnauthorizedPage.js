// Unauthorized.js
import React from "react";
import { Link } from "react-router-dom";
import { Container, CustomAiHeading } from "./UnauthorizedStyle";

const Unauthorized = () => {
  return (
    <>
      <Container>
        <CustomAiHeading>
          <h2>Unauthorized Access</h2>
          <h3>You do not have permission to view this page.</h3>
          <Link to="/login" style={{ color: "blue" }}>
            Go to Login
          </Link>
        </CustomAiHeading>
      </Container>
    </>
  );
};

export default Unauthorized;
