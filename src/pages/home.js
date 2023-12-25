// src/pages/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
const Home = () => {
  return (
    <div>
        <Header />
    <div id="layoutSidenav">
        <Menu />
        <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid px-4">
                <h2>Xin chào mọi người</h2>
            </div>
        </main>
            <Footer />
        </div>
    </div>
    </div>
  );
};

export default Home;
