import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
import "../dist/css/main.css";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="forms text-center">
          <div className="form-content">
            <div className="login-form text-center">
              <form>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope text-center"> </i>
                    <input type="text" placeholder="" required />
                  </div>
                  <div className="input-box ">
                    <i className="fas fa-lock"> </i>
                    <input type="password" placeholder="" required />
                  </div>
                  <div className="py-3 text-center mx-auto">
                    <a href="/Profile" className="btn btn-primary">Login</a>
                    <div className="mt-3">
                      <p>Sudah memiliki akun? Silakan <a href="/Registrasi">Daftar</a></p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;