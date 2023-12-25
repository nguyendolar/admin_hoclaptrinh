// src/pages/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
const CourseType = () => {
  return (
    <div>
        <Header />
    <div id="layoutSidenav">
        <Menu />
        <div id="layoutSidenav_content">
        <main>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Danh sách loại khóa học</h1>
        <div class="card mb-4">
            <div class="card-header">
                <button type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#exampleModalAdd">
                    Thêm mới
                </button>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead style={{ color: '#0d6efd' }}>
                        <tr style={{ backgroundColor: 'darkgrey' }}>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td style={{ width: '10px' }}>1</td>
                                <td>
                                    Lập trình website
                                </td>
                                <td>
                                    <button style={{ width: '100px' }} type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#idEx1">
                                        Sửa
                                    </button>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#idModelDel" style={{ width: '100px' }} class="btn btn-danger"> Xóa</button>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '10px' }}>2</td>
                                <td>
                                    Lập trình ứng dụng
                                </td>
                                <td>
                                    <button style={{ width: '100px' }} type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#idEx1">
                                        Sửa
                                    </button>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#idModelDel" style={{ width: '100px' }} class="btn btn-danger"> Xóa</button>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '10px' }}>3</td>
                                <td>
                                    Lập trình phần mềm
                                </td>
                                <td>
                                    <button style={{ width: '100px' }} type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#idEx1">
                                        Sửa
                                    </button>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#idModelDel" style={{ width: '100px' }} class="btn btn-danger"> Xóa</button>
                                    
                                </td>
                            </tr>
                            <div class="modal fade" id="idModelDel" tabindex="-1"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Bạn chắc chắn muốn xóa ?</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                </div>

                                                <div class="modal-body">
                                                    Loại khóa học : Lập trình Website
                                                    <form action="/AdminCourseType/Delete" method="post">
                                                        <input type="hidden" class="form-control" id="id" name="CourseTypeId" value="@item.CourseTypeId"/>
                                                        <div class="modal-footer" style={{ marginTop: '20px' }}>
                                                            <button style={{ width: '100px' }} type="button" class="btn btn-secondary"
                                                                    data-bs-dismiss="modal">
                                                                Đóng
                                                            </button>
                                                            <button style={{ width: '100px' }} type="submit" class="btn btn-danger"> Xóa</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            <div class="modal fade" id="idEx1" tabindex="-1"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Cập nhật</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form method="POST" action="/AdminCourseType/Update" class="register-form" id="register-form">
                                                <input type="hidden" class="form-control" id="id" name="CourseTypeId" value=""/>
                                                <div class="mb-3">
                                                    <label for="category-film"
                                                           class="col-form-label">Tên loại khóa học:</label>
                                                    <input type="text" class="form-control" id="category-film" value="" name="TypeName" required/>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">
                                                        Đóng
                                                    </button>
                                                    <button type="submit" class="btn btn-primary">Lưu</button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>
<div class="modal fade" id="exampleModalAdd" tabindex="-1"
     aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Thêm mới</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form method="POST" action="/AdminCourseType/Add" class="register-form" id="register-form">
                    <div class="mb-3">
                        <label for="category-film"
                               class="col-form-label">Tên loại khóa học:</label>
                        <input type="text" class="form-control" id="category-film" name="TypeName" required/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="submit" class="btn btn-primary">Lưu </button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
            <Footer />
        </div>
    </div>
    </div>
  );
};

export default CourseType;
