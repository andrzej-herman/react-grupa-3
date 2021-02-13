import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header/Header";
import "./App.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="app">
      <Container className="gr_3_container">
        <Header />
        <h1>Strona główna</h1>
        <Link to="/login">Zaloguj się</Link>
        <br />
        <Link to="/shop">Zobacz sklep</Link>
      </Container>
    </div>
  );
};

export default MainPage;
