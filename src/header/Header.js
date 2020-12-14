import React from "react";
import "./Header.css";
import { Jumbotron, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron className="jumbo">
      <h1>Aplikacja grupy 3</h1>
      <p>Przykładowa aplikacja webowa z logowaniem i rejestracją użytkownika</p>
      <p>
        <Button variant="primary">Utwórz konto</Button>
      </p>
    </Jumbotron>
  );
};

export default Header;
