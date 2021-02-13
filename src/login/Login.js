import React, { useState } from "react";
import "./Login.css";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../redux/StateProvider";
import { actionTypes } from "../redux/reducer";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const history = useHistory();

  const handleEmail = (event) => {
    setUserEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setUserPassword(event.target.value);
  };

  const loginUser = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(async () => {
        const looggedUser = {
          email: userEmail,
          password: userPassword,
        };

        dispatch({
          type: actionTypes.LOGIN_USER,
          user: looggedUser,
        });

        history.push("/shop");
      })
      .catch((error) => {
        setLoginError(true);
      });
  };

  return (
    <>
      <div className="login_panel">
        <div className="login_title">
          <h4>Panel logowania</h4>
        </div>
        <div className="login_box">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="wpisz swój adres email"
                onChange={handleEmail}
                value={userEmail}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Hasło</Form.Label>
              <Form.Control
                type="password"
                placeholder="wpisz swoje hasło"
                onChange={handlePassword}
                value={userPassword}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              block
              className="login_button"
              onClick={loginUser}
            >
              Zaloguj
            </Button>
          </Form>

          {loginError ? (
            <Alert className="alert" variant="danger">
              Nieprawidłowy email lub hasło
            </Alert>
          ) : null}
        </div>
      </div>
      <div className="test">
        <Link to="/shop">Otwórz sklep</Link>
      </div>
    </>
  );
};

export default Login;
