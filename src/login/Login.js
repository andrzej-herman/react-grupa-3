import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleEmail = (event) => {
    setUserEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setUserPassword(event.target.value);
  };

  const sendUserToServer = (event) => {
    event.preventDefault();
    alert(`Email => ${userEmail}, Password => ${userPassword}`);
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
              onClick={sendUserToServer}
            >
              Zaloguj
            </Button>
          </Form>
        </div>
      </div>
      <div className="test">
        <p>Email => {userEmail}</p>
        <p>Hasło => {userPassword}</p>
      </div>
    </>
  );
};

export default Login;
