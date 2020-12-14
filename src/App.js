import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./header/Header";
import Login from "./login/Login";

const App = () => {
  return (
    <div className="app">
      <Container className="gr_3_container">
        <Header />
        <Login />
      </Container>
    </div>
  );
};

export default App;
