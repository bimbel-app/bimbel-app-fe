import React from 'react';

const Logout = ({ handleLogout }) => {
  return (
    <div>
      <h2>Silahkan login</h2>
      <button className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2" onClick={() => navigate("/login")}>Logout</button>
    </div>
  );
};

export default Logout;
