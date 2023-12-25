// src/pages/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
const Video = () => {
  return (
    <div>
        <Header />
    <div id="layoutSidenav">
        <Menu />
        <div id="layoutSidenav_content">
        <main>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Danh sách video</h1>
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
                            <th>Tên video</th>
                            <th>Video</th>
                            <th>Khóa học</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td style={{ width: '10px' }}>1</td>
                                <td>
                                    Bài 1 : Làm quen PHP
                                </td>
                                <td>
                                <a href="/" data-bs-toggle="modal" data-bs-target="#idModelView">Xem</a>
                                </td>
                                <td>
                                    Lập trình PHP
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
                                    Bài 1 : Làm quen PHP
                                </td>
                                <td>
                                <a href="/" data-bs-toggle="modal" data-bs-target="#idModelView">Xem</a>
                                </td>
                                <td>
                                    Lập trình PHP
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
                                    Bài 1 : Làm quen PHP
                                </td>
                                <td>
                                <a href="/" data-bs-toggle="modal" data-bs-target="#idModelView">Xem</a>
                                </td>
                                <td>
                                    Lập trình PHP
                                </td>
                                <td>
                                    <button style={{ width: '100px' }} type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#idEx1">
                                        Sửa
                                    </button>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#idModelDel" style={{ width: '100px' }} class="btn btn-danger"> Xóa</button>
                                    
                                </td>
                            </tr>
                            <div class="modal fade" id="idModelView" tabindex="-1" aria-labelledby="exampleModalLabel"
                                 aria-hidden="true">
                                <div class="modal-dialog modal-xl">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <iframe width="1104" height="621" src="https://www.youtube.com/embed/3bTDrLL1P5c?si=y_mQuJ16YLrDbjLe"
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                    Video : Bài 1 : Làm quen PHP
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
                                            <div class="mb-3">
                        <label for="category-film"
                               class="col-form-label">Khóa học:</label>
                        <select class="form-select" aria-label="Default select example" id="theloai" tabindex="8" name="CourseId" required>
                            <option selected value="">Chọn khóa học</option>
                            <option value="@item3.CourseId">Lập trình PHP</option>
                            <option value="@item3.CourseId">Lập trình React</option>
                            <option value="@item3.CourseId">Lập trình NodeJs</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="category-film"
                               class="col-form-label">Tên video:</label>
                        <input type="text" class="form-control" id="category-film" name="VideoName" required/>
                    </div>
                    <div class="mb-3">
                        <label for="category-film"
                               class="col-form-label">Link video:</label>
                        <input type="text" class="form-control" id="category-film" name="VideoUrl" required/>
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
                               class="col-form-label">Khóa học:</label>
                        <select class="form-select" aria-label="Default select example" id="theloai" tabindex="8" name="CourseId" required>
                            <option selected value="">Chọn khóa học</option>
                            <option value="@item3.CourseId">Lập trình PHP</option>
                            <option value="@item3.CourseId">Lập trình React</option>
                            <option value="@item3.CourseId">Lập trình NodeJs</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="category-film"
                               class="col-form-label">Tên video:</label>
                        <input type="text" class="form-control" id="category-film" name="VideoName" required/>
                    </div>
                    <div class="mb-3">
                        <label for="category-film"
                               class="col-form-label">Link video:</label>
                        <input type="text" class="form-control" id="category-film" name="VideoUrl" required/>
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

export default Video;
