// src/pages/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
const Customer = () => {
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
                <table class="table table-bordered">
                    <thead style={{ color: '#0d6efd' }}>
                        <tr style={{ backgroundColor: 'darkgrey' }}>
                            <th>STT</th>
                            <th>Họ tên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td style={{ width: '10px' }}>1</td>
                                <td>
                                    Nguyễn Đình Vũ
                                </td>
                                <td>
                                    dinhvu@gmail.com
                                </td>
                                <td>
                                    0394073645
                                </td>
                                <td>
                                    Hà Nội
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '10px' }}>2</td>
                                <td>
                                    Châu Khải Phong
                                </td>
                                <td>
                                    khaiphong@gmail.com
                                </td>
                                <td>
                                    0346534278
                                </td>
                                <td>
                                    Hà Nội
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '10px' }}>3</td>
                                <td>
                                    Nguyễn Lê Bảo
                                </td>
                                <td>
                                    lebao@gmail.com
                                </td>
                                <td>
                                    0905348634
                                </td>
                                <td>
                                    Hà Nội
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>

            <Footer />
        </div>
    </div>
    </div>
  );
};

export default Customer;
