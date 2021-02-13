import React from "react";
import { Container, Button } from "react-bootstrap";
import Header from "./header/Header";
import "./App.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./redux/StateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./redux/reducer";

const Shop = () => {
  const [{ user }, dispatch] = useStateValue();

  const logoutUser = () => {
    auth.signOut().then(async () => {
      dispatch({
        type: actionTypes.LOGOUT_USER,
      });
    });
  };

  return (
    <div className="app">
      <Container className="gr_3_container">
        <Header />
        <h1>Sklep</h1>
        <Link to="/">Powrót na stronę główną</Link>
        <br />
        <h4>Zalogowany użytkownik: {user.email}</h4>
        <Button
          variant="primary"
          type="submit"
          className="login_button"
          onClick={logoutUser}
        >
          Wyloguj się
        </Button>
      </Container>
    </div>
  );
};

export default Shop;
