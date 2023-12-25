// src/pages/Home.js
import React from 'react';
import {Link } from "react-router-dom";
const Authen = () => {
  return (
    <div style={{
        backgroundImage: 'url(https://png.pngtree.com/thumb_back/fw800/background/20201026/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Đăng nhập</h3></div>
                                <div class="card-body">
                                    <form action="/AdminAuthentication/Login" method="post">
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputEmail" name="email" type="text" placeholder="Tên người dùng" />
                                            <label for="inputEmail">Tên người dùng</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputPassword" name="password" type="password" placeholder="Mật khẩu" />
                                            <label for="inputPassword">Mật khẩu</label>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <Link class="btn btn-primary" to="/">Đăng nhập</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div id="layoutAuthentication_footer">
        </div>
    </div>
    </div>
  );
};

export default Authen;
