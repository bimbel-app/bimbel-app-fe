import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../dist/css/main.css";

const Registrasi = () => {
  return (
    <Container>
      <div className="title fw-bold text-center py-2">Formulir Registrasi</div>
      <div className='content'>
        <form action="#">
          <div className='user-details'>
            <div className='input-box'>
              <span className='details'>Nama Lengkap</span>
              <input type="text" placeholder='' required />
            </div>
            <div className='input-box'>
              <span className='details'>Username</span>
              <input type="text" placeholder='' required />
            </div>
            <div className='input-box'>
              <span className='details'>Email</span>
              <input type="text" placeholder='' required />
            </div>
            <div className='input-box'>
              <span className='details'>No Handphone</span>
              <input type="text" placeholder='' required />
            </div>
            <div className='input-box'>
              <span className='details'>Password</span>
              <input type="text" placeholder='' required />
            </div>
            <div className='input-box'>
              <span className='details'>Ulangi Password</span>
              <input type="text" placeholder='' required />
            </div>
            <div className="text-center mx-auto">
              <a href="/login" className="btn btn-primary">Daftar</a>
              <div className="mt-3 justify text-center">
                <p>Sudah memiliki akun? Silakan <a href="/login">login</a></p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Registrasi;