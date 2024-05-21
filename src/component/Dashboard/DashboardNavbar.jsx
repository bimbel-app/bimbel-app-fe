import React from "react"
import { NavLink } from "react-router-dom"
export const DashboardNavbar = ()=>{
    return(
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">

<ul className="navbar-nav">
<li className="nav-item">
<a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
</li>
<li className="nav-item d-none d-sm-inline-block">
<NavLink to="dashboard/data_siswa/index" className="nav-link">Home</NavLink>
</li>
<li className="nav-item d-none d-sm-inline-block">
<a href="#" className="nav-link"></a>
</li>
</ul>
</nav>
    )
}

 