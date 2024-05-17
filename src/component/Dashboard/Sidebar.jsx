import { useState, useContext } from "react";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
// import  { NavLink } from "react-bootstrap";
import Cookies from "universal-cookie";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import {useNavigate, useLocation} from 'react';
import { AuthContext } from "../../context/auth.context-copy";

export const Sidebar = () => {
  const auth = useContext(AuthContext);
  // const navigate = new Navigate()
  const [isOpen, setIsOpen] = useState(false)
  const [showState, setShowState] = useState(false)
  const navLinks = [
    {id:1, name:"Data Siswa", href:"dashboard/data_siswa/index"},
    {id:2, name:"Data Tentor", href:"dashboard/data_tentor/index"},
    {id:3, name:"Data Mapel", href:"dashboard/data_mapel/index"},
    {id:4, name:"Data Jadwal", href:"dashboard/data_jadwal/index"},
    {id:5, name:"Logout", href: "", },
    
  ]
  const navigate = useNavigate();
  const cookies = new Cookies();
  
  const location = useLocation()
  const current = location.pathname
  
  const handleLogout = ()=>setShowState(false)
  const handleClick=()=>{
    setIsOpen(!isOpen)
  }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(isShow);
    const handleClose = () => setShow(false);  
    const handleNav = ()=> navigate("/login")
  
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      {/* <Modal show={handleShow} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Silahkan Login Kembali</Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
          <NavLink href={location.pathname}
                    tabindex="0"
                    aria-controls="example1"
                    type="button"
                  >
                    <span>Kembali</span>
                  </NavLink>{" "}
          </Button>
        </Modal.Footer>
      </Modal> */}

    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/> */}
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              {auth.uname}
            </a>
          </div>
        </div>

        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className={`nav-item ${isOpen ? "menu-is-opening menu-open": ""}`}>
              <a href="#" className="nav-link active"  onClick={handleClick}>
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Starter Pages
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Active Page</p>
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink>
                    <i className="far fa-circle nav-icon"></i>
                    <p>Inactive Page</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={`nav-item ${isOpen ? "menu-is-opening menu-open": ""}`}>
            {navLinks.map((i)=>{
            return(
              
              <NavLink key={i.id} className={({isActive})=>{return "nav-link " + (isActive ? "active" : "")}} to={i.href}>
                <p>{i.name}</p>
              </NavLink>
              
            )})
          }
          </li>
            
          </ul>
        </nav>
      </div>
    </aside>
    </>
  );
};
