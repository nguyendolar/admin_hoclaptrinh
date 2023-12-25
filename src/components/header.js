// Header.js
import React from 'react';
import {Link } from "react-router-dom";
const Header = () => {
  return (
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-primary">
    <a href="/" className="navbar-brand ps-3" style={{
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        fontWeight: 'bold',
        fontSize: '26px',
        }}>
        HỆ THỐNG
        </a>

    <button style={{ color: 'white' }} class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
        <i class="fas fa-bars"></i>
    </button>
    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
    </form>
    <ul style={{ color: 'white' }} class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">

        <li class="nav-item dropdown">
            <a style={{ color: 'white' }} class="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown"
               aria-expanded="false"><i class="fas fa-user fa-fw"></i>Lê Văn A</a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><Link to="/authen" class="dropdown-item">Đăng xuất</Link></li>
            </ul>
        </li>
    </ul>
</nav>
  );
};

export default Header;