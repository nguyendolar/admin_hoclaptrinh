import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from '../components/datatable';
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'
import { Link, useNavigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css'; // Import CSS styles for the editor

const Customer = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
      let token = localStorage.getItem("tokenAdmin");
      console.log("token", token);
      if (token == null)
      {
          navigate("/authen");
      } 
  }, [])
  useEffect(() => {
    // Gọi API để lấy danh sách khách hàng
    fetch('http://localhost:8080/api/news/customer')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error:', error));
  }, []);

  //data table
  const columns = React.useMemo(
    () => [
      {
        Header: 'STT',
        accessor: (row, index) => index + 1,
      },
      {
        Header: 'Họ tên',
        accessor: 'fullName',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Số điện thoại',
        accessor: 'phoneNumber',
      },
      {
        Header: 'Địa chỉ',
        accessor: 'address',
      },
    ],
    []
  );
  return (
    <div>
      <Header />
      <div id="layoutSidenav">
        <Menu />
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <h1 class="mt-4">Danh sách khách hàng</h1>
              <div class="card mb-4">
                <div class="card-body">
                <DataTable columns={columns} data={courses} />
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Customer
