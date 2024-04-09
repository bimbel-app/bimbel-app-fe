import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Logout = ({ handleLogout }) => {
  
  const navigate = useNavigate();
  const cookies = new Cookies();
  
  handleLogout = ()=>{
    cookies.remove('token');
    navigate("/login")
  }
  return (
    <div>
      <h2>Silahkan login</h2>
      <button className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2" onClick={handleLogout}>Login</button>
    </div>
  );
};

export default Logout;
