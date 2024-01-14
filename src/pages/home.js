// src/pages/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
import { Link, useNavigate } from "react-router-dom";

const Home = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        let token = localStorage.getItem("tokenAdmin");
        console.log("token", token);
        if (token == null)
        {
            navigate("/authen");
        } 
        navigate("/course");
    }, [])
  return (
    <div>
        <Header />
    <div id="layoutSidenav">
        <Menu />
        <div id="layoutSidenav_content">
        <main>
        </main>
            <Footer />
        </div>
    </div>
    </div>
  );
};

export default Home;
