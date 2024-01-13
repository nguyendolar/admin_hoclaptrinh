// src/pages/Home.js
import React, { useState } from 'react';
import {Link,useNavigate } from "react-router-dom";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Authen = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onLogin = async () => {
        if (email === '' || password === '')
        {
            toast.error("Cần điền đầy đủ thông tin");
        } else
        {
            if (email === 'admin@gmail.com' && password === '123456789')
            {
                localStorage.setItem("tokenAdmin", "123");
                toast.success("Đăng nhập thành công");
                navigate("/");
            } else
            {
                toast.error("Tài khoản mật khẩu không đúng");
            }
        }
    }
  return (
    
    <div style={{
        backgroundImage: 'url(https://png.pngtree.com/thumb_back/fw800/background/20201026/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
          <ToastContainer />
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
                                            <input class="form-control" id="inputEmail"  value={email} onChange={(e) => setEmail(e.target.value)}  name="email" type="text" placeholder="Tên người dùng" />
                                            <label for="inputEmail">Email</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Mật khẩu" />
                                            <label for="inputPassword">Mật khẩu</label>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <button type='button' onClick={()=>onLogin()} class="btn btn-primary">Đăng nhập</button>
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
