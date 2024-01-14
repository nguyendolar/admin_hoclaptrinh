// Header.js
import React from 'react';
import {Link } from "react-router-dom";
const Menu = () => {
  return (
    <div id="layoutSidenav_nav">
    <nav style={{ backgroundColor: '#F1F1F1', important: 'true' }} class="sb-sidenav accordion " id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                <Link to="/coursetype" class="nav-link">
                    <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                    Danh mục khóa học
                </Link>
                <hr />
                <Link to="/course" class="nav-link">
                    <div class="sb-nav-link-icon"><i class="fas fa-external-link-alt"></i></div>
                    Khóa học
                </Link>
                <hr />
                <Link to="/video" class="nav-link">
                    <div class="sb-nav-link-icon"><i class="fas fa-clock"></i></div>
                    Video khóa học
                </Link>
                <hr />
                <Link to="/customer" class="nav-link">
                    <div class="sb-nav-link-icon"><i class="fas fa-user"></i></div>
                     Khách hàng
                </Link>
                <hr />
                <Link to="/news" class="nav-link">
                    <div class="sb-nav-link-icon"><i class="fas fa-chart-bar"></i></div>
                    Tin tức
                </Link>

            </div>
        </div>
    </nav>
</div>
  );
};

export default Menu;