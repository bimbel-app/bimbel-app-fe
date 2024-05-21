import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();
  const navigate = useNavigate();

  const url = "http://localhost:8080/api/login";

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post(url, formData);
      cookies.set("token", response.data.token, { maxAge: 1800 });
      cookies.set("name", response.data.user.name, { maxAge: 1800 });
      navigate("/dashboard/data_siswa/index");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="col-6 mt-5">
      <form onSubmit={loginHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2"
          type="submit"
        >
          Masuk
        </Button>
      </form>
    </Container>
  );
};

export default Login;