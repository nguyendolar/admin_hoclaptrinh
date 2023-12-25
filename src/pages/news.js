// src/pages/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
const News = () => {
  return (
    <div>
        <Header />
    <div id="layoutSidenav">
        <Menu />
        <div id="layoutSidenav_content">
        <main>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Danh sách tin tức</h1>
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
                            <th>Tiêu đề</th>
                            <th>Ảnh</th>
                            <th>Nội dung</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td style={{ width: '10px' }}>1</td>
                                <td>
                                    Học lập trình khiến bạn trở nên thông minh
                                </td>
                                <td>
                                <img
                                    alt="course"
                                    style={{
                                    width: '250px',
                                    height: '150px',
                                    important: 'true',
                                    }}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MB5e369dNe_PTEsElaOD7B72I5cEQ1UvnA&usqp=CAU"
                                    class="img-fluid"
                                />
                                </td>
                                <td>
                                    <a href="/" data-bs-toggle="modal" data-bs-target="#nameModelDes">Xem</a>
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
                                    Học lập trình khiến bạn trở nên thông minh
                                </td>
                                <td>
                                <img
                                    alt="course"
                                    style={{
                                    width: '250px',
                                    height: '150px',
                                    important: 'true',
                                    }}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MB5e369dNe_PTEsElaOD7B72I5cEQ1UvnA&usqp=CAU"
                                    class="img-fluid"
                                />
                                </td>
                                <td>
                                    <a href="/" data-bs-toggle="modal" data-bs-target="#nameModelDes">Xem</a>
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
                                    Học lập trình khiến bạn trở nên thông minh
                                </td>
                                <td>
                                <img
                                    alt="course"
                                    style={{
                                    width: '250px',
                                    height: '150px',
                                    important: 'true',
                                    }}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MB5e369dNe_PTEsElaOD7B72I5cEQ1UvnA&usqp=CAU"
                                    class="img-fluid"
                                />
                                </td>
                                <td>
                                    <a href="/" data-bs-toggle="modal" data-bs-target="#nameModelDes">Xem</a>
                                </td>
                                <td>
                                    <button style={{ width: '100px' }} type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#idEx1">
                                        Sửa
                                    </button>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#idModelDel" style={{ width: '100px' }} class="btn btn-danger"> Xóa</button>
                                    
                                </td>
                            </tr>
                                <div class="modal fade" id="nameModelDes" tabindex="-1"
                                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Học lập trình khiến bạn trở nên thông minh</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Mình chắc có tới 96,69% các bạn mới tiếp xúc với ngôn ngữ lập trình sẽ thấy tá hỏa khi đọc một file code chứa khoảng vài trăm dòng trở lên (bản thân mình cũng vậy). Thật dễ hiểu là vì sao mấy bạn sợ, đó là vì bạn chưa quen, chưa hiểu từng thành phần của thứ bạn đang đọc, hoặc chưa hiểu được luồng, quy tắc đặt tên, quy tắc gọi hàm,… nên không thể hiểu hết được code viết để làm gì, chạy ra làm sao. Từ đó cảm giác sợ hãi sẽ xâm lấn khiến cho bạn nản và suy nghĩ rằng bạn không có khả năng học lập trình.

Kể một kỷ niệm nho nhỏ của mình vào năm 2015, có đi phỏng vấn vị trí back-end developer tại một công ty game, bị đưa optimize một file code đâu đến hơn 300 dòng (cũng không nhớ chính xác). Mà lúc đó ngáo ngơ mới ra trường, cũng chưa có kinh nghiệm gì nhiều nên rất choáng khi đụng phải mớ hỗn độn như vậy, cuối cùng mình bỏ bài đó và kết quả thì mấy bạn biết rồi đó. Điều đó sẽ không có gì to tát, rớt thì về học lại thôi, nhưng khi về nhà mình ngồi suy nghĩ lại, hiểu được và cũng thấy được cái chỗ cần optimize đó. Có lẽ lúc đó quá áp lực về tâm lý khi lần đầu tiên thấy nhiều code đến vậy!</p>
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
                                                    Tin tức : Học lập trình khiến bạn trở nên thông minh
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
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Cập nhật</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form method="POST" action="/AdminCourseType/Update" class="register-form" id="register-form">
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col-12 mb-3">
                                                        <label for="category-film"
                                                               class="col-form-label">Tiêu đề:</label>
                                                        <input type="text" class="form-control" id="category-film" name="Title" required/>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mb-3">
                                                        <label for="category-film"
                                                               class="col-form-label">Ảnh:</label>
                                                        <input type="file" name="file" class="form-control-file"
                                                               id="exampleFormControlFile1" required/>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mb-3">
                                                        <label for="category-film"
                                                               class="col-form-label">Nội dung:</label>
                                                        <textarea name="Content" id="editor" cols="100"
                                                                  rows="5"></textarea>
                                                    </div>
                                                </div>
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
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Thêm mới</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form method="POST" action="/AdminCourseType/Add" class="register-form" id="register-form">
                <div class="col">
                                                <div class="row">
                                                    <div class="col-12 mb-3">
                                                        <label for="category-film"
                                                               class="col-form-label">Tiêu đề:</label>
                                                        <input type="text" class="form-control" id="category-film" name="Title" required/>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mb-3">
                                                        <label for="category-film"
                                                               class="col-form-label">Ảnh:</label>
                                                        <input type="file" name="file" class="form-control-file"
                                                               id="exampleFormControlFile1" required/>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mb-3">
                                                        <label for="category-film"
                                                               class="col-form-label">Nội dung:</label>
                                                        <textarea name="Content" id="editor" cols="100"
                                                                  rows="5"></textarea>
                                                    </div>
                                                </div>
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

export default News;
