import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header/Header";
import "./App.css";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="app">
      <Container className="gr_3_container">
        <Header />
        <h1>Sklep</h1>
        <Link to="/">Powrót na stronę główną</Link>
      </Container>
    </div>
  );
};

export default Shop;
