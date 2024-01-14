// Header.js
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem("tokenAdmin");
        navigate("/authen");
    }
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
    // Cập nhật thời gian mỗi giây
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear interval khi component unmount
    return () => clearInterval(intervalId);
  }, []); // Chỉ chạy một lần khi component được mount
  return (
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-primary">
    <a href="/" className="navbar-brand ps-3" style={{
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        fontWeight: 'bold',
        fontSize: '26px',
        }}>
        HỆ THỐNG
        </a>
       
        <div style={{ color: 'white',}}>
        <h5 style={{ fontWeight: 'bold' }}>WEBSITE HỌC LẬP TRÌNH</h5>
      {/* <span style={{ fontWeight: 'bold' }}>Bây giờ là </span>{currentTime.toLocaleTimeString()}
      <span style={{ fontWeight: 'bold' }}>Ngày </span>{currentTime.toLocaleDateString()} */}
    </div>
    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
    </form>
    <ul style={{ color: 'white' }} class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">

        <li class="nav-item dropdown">
            <a style={{ color: 'white' }} class="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown"
               aria-expanded="false"><i class="fas fa-user fa-fw"></i>Quản trị viên</a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><button type='button' onClick={() => onLogout()} class="dropdown-item">Đăng xuất</button></li>
            </ul>
        </li>
    </ul>
    <ToastContainer />
</nav>
  );
};

export default Header;