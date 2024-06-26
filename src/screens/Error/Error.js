// ErrorPage.js
import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../components/headers/admin/Header";
import CustomerHeader from "../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../components/headers/BarberHeader.js/BarberHeader";
import { Container, ErrorHeading } from "./ErrorStyle";

const ErrorPage = () => {
  const userToken = localStorage.getItem("userToken");
  const userTokenObj = userToken ? JSON.parse(userToken) : null;
  const role = userTokenObj ? userTokenObj.role : null;

  const renderHeader = () => {
    switch (role) {
      case "admin":
        return <AdminHeader />;
      case "customer":
        return <CustomerHeader />;
      case "barber":
        return <BarberHeader />;
      default:
        return null;
    }
  };

  return (
    <Container>
      {renderHeader()}

      <ErrorHeading>
        <h1>404 - Page Not Found</h1>
      </ErrorHeading>
      {/* <Link to="/">Go to Login</Link> */}
    </Container>
  );
};

export default ErrorPage;
