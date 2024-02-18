import React, { useState } from 'react';
import '../dist/css/main.css';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav>
      <div>
        <div>
          {isLoggedIn ? (
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <a href="/login">Logout</a> // Perubahan disini, ganti menjadi Logout
          )}
        </div>
      </div>
    </nav>
  );
};

const Profile = ({ handleLogout }) => {
  const [user, setUser] = useState({
    name: 'anissa',
    email: 'anisa@gmail.com',
    alamat: 'jakarta selatan',
    no_handphone: '087676454256',
    sosialmedia: '',
    bio: '',
  });

  const updateUser = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  return (
    <div>
      <Navbar isLoggedIn={true} handleLogout={handleLogout} />
      <div className="container profile-container">
        <h1 className="mb-4">Profil Pengguna</h1>
        <div className="mb-3">
          <label>Nama  </label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => updateUser('name', e.target.value)}
            className="input-field"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;