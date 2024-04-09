import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link dari react-router-dom
import axios from "axios"
import Cookies from "universal-cookie";
import cookie from "cookie"
import { AuthProvider } from "../context/auth.context";
import { Button, Container, Form } from "react-bootstrap";
// import "../assets/styles/login.module.css";

const Login= ()=> {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const cookies = new Cookies;
  const navigate = useNavigate();

  const url = "http://localhost:8000/api/login"

  const loginHandler = async (e)=>{
    e.preventDefault()

    const formData = new FormData();

    formData.append('email', email)
    formData.append('password', password)

    await axios.post(url, formData)
    .then((response)=>{
      cookies.set("token", response.data.token, {maxAge:1800})
      cookies.set("name", response.data.user.name, {maxAge:1800})
      cookies.set({})
      navigate("/dashboard/data_siswa/index")
      setIsLoading(false)
    })
    .catch((error)=>{
      // setValidation(error.response.data)
      console.log(error);
    })
  }
  
    return (
      // <div className="container">
      //   <input type="checkbox" id="flip" />
      //   <div className="forms text-center">
      //     <div className="form-content">
      //       <div className="login-form text-center">
      //         <form onSubmit={loginHandler}>
      //           <div className="input-boxes">
      //             <div className="input-box">
      //               <i className="fas fa-envelope text-center"> </i>
      //               <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
      //             </div>
      //             {/* {validation.email && (<div className="alert alert-danger">{validation.email[0]}</div>)} */}
      //             <div className="input-box">
      //               <i className="fas fa-lock"> </i>
      //               <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
      //             </div>
      //             {/* {validation.password && (<div className="alert alert-danger">{validation.password[0]}</div>)} */}
      //             <div className="py-3 text-center mx-auto">
      //               <input className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2" type="submit" value="Login"/>
      //               <div className="mt-3">
      //                 <p>Belum memiliki akun? Silakan <a href="/Registrasi">Daftar</a></p>
      //               </div>
      //             </div>
      //           </div>
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <Container className="col-6">

  <form onSubmit={loginHandler}>
      <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
                >
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
                >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </Form.Group>
              <Button className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2" type="submit">
                Masuk
              </Button>
      </form>
      <div className="mt-3">
      <p>Belum memiliki akun? Silakan <a href="/Registrasi">Daftar</a></p>
      </div>
    </Container>
    );
  }

export default Login;