import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header/Header";
import Login from "./login/Login";
import "./App.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="app">
      <Container className="gr_3_container">
        <Header />
        <Login />
        <Link to="/">Powrót na stronę główną</Link>
      </Container>
    </div>
  );
};

export default LoginPage;
