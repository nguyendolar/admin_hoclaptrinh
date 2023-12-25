// src/pages/Home.js
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'
const Course = () => {
  return (
    <div>
      <Header />
      <div id="layoutSidenav">
        <Menu />
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <h1 class="mt-4">Danh sách khóa học</h1>
              <div class="card mb-4">
                <div class="card-header">
                  <button
                    type="button"
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalAdd"
                  >
                    Thêm mới
                  </button>
                </div>
                <div class="card-body">
                  <table class="table table-bordered">
                    <thead style={{ color: '#0d6efd' }}>
                      <tr style={{ backgroundColor: 'darkgrey' }}>
                        <th>STT</th>
                        <th>Tên khóa học</th>
                        <th style={{ width: '18.514451%', important: 'true' }}>
                          Ảnh
                        </th>
                        <th>Giá (VNĐ)</th>
                        <th>Loại</th>
                        <th>Danh mục khóa học</th>
                        <th>Mô tả</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ width: '10px' }}>1</td>
                        <td>Lập trình PHP</td>
                        <td>
                          <img
                            alt="course"
                            style={{
                              width: '250px',
                              height: '150px',
                              important: 'true',
                            }}
                            src="https://lh5.googleusercontent.com/e5VMd5dCOtigrMRvOum7SONS6I5ESzD2rPwuCBfgR3uBVUyEIJ_M-E6n3EQBLMUmqKfy-rkYy_jKHXpuMJ57uD2vF5uS1mc2JtMQBVl4Io1tsAKLnT4fEhTHdDOpF_pqRrf8cJuR"
                            class="img-fluid"
                          />
                        </td>
                        <td>100,000</td>
                        <td>Có phí</td>
                        <td>Lập trình website</td>
                        <td>Khóa học dạy về ngôn ngữ lập trình PHP</td>
                        <td>
                          <button
                            style={{ width: '100px' }}
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#idEx1"
                          >
                            Sửa
                          </button>
                          <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#idModelDel"
                            style={{ width: '100px' }}
                            class="btn btn-danger"
                          >
                            {' '}
                            Xóa
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: '10px' }}>2</td>
                        <td>Lập trình PHP</td>
                        <td>
                          <img
                            alt="course"
                            style={{
                              width: '250px',
                              height: '150px',
                              important: 'true',
                            }}
                            src="https://lh5.googleusercontent.com/e5VMd5dCOtigrMRvOum7SONS6I5ESzD2rPwuCBfgR3uBVUyEIJ_M-E6n3EQBLMUmqKfy-rkYy_jKHXpuMJ57uD2vF5uS1mc2JtMQBVl4Io1tsAKLnT4fEhTHdDOpF_pqRrf8cJuR"
                            class="img-fluid"
                          />
                        </td>
                        <td>100,000</td>
                        <td>Có phí</td>
                        <td>Lập trình website</td>
                        <td>Khóa học dạy về ngôn ngữ lập trình PHP</td>
                        <td>
                          <button
                            style={{ width: '100px' }}
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#idEx1"
                          >
                            Sửa
                          </button>
                          <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#idModelDel"
                            style={{ width: '100px' }}
                            class="btn btn-danger"
                          >
                            {' '}
                            Xóa
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: '10px' }}>3</td>
                        <td>Lập trình PHP</td>
                        <td>
                          <img
                            alt="course"
                            style={{
                              width: '250px',
                              height: '150px',
                              important: 'true',
                            }}
                            src="https://lh5.googleusercontent.com/e5VMd5dCOtigrMRvOum7SONS6I5ESzD2rPwuCBfgR3uBVUyEIJ_M-E6n3EQBLMUmqKfy-rkYy_jKHXpuMJ57uD2vF5uS1mc2JtMQBVl4Io1tsAKLnT4fEhTHdDOpF_pqRrf8cJuR"
                            class="img-fluid"
                          />
                        </td>
                        <td>100,000</td>
                        <td>Có phí</td>
                        <td>Lập trình website</td>
                        <td>Khóa học dạy về ngôn ngữ lập trình PHP</td>
                        <td>
                          <button
                            style={{ width: '100px' }}
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#idEx1"
                          >
                            Sửa
                          </button>
                          <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#idModelDel"
                            style={{ width: '100px' }}
                            class="btn btn-danger"
                          >
                            {' '}
                            Xóa
                          </button>
                        </td>
                      </tr>
                      <div
                        class="modal fade"
                        id="idModelDel"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Bạn chắc chắn muốn xóa ?
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>

                            <div class="modal-body">
                              Khóa học : Lập trình PHP
                              <form
                                action="/AdminCourseType/Delete"
                                method="post"
                              >
                                <input
                                  type="hidden"
                                  class="form-control"
                                  id="id"
                                  name="CourseTypeId"
                                  value="@item.CourseTypeId"
                                />
                                <div
                                  class="modal-footer"
                                  style={{ marginTop: '20px' }}
                                >
                                  <button
                                    style={{ width: '100px' }}
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Đóng
                                  </button>
                                  <button
                                    style={{ width: '100px' }}
                                    type="submit"
                                    class="btn btn-danger"
                                  >
                                    {' '}
                                    Xóa
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="modal fade"
                        id="idEx1"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Cập nhật
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form
                                method="POST"
                                action="/AdminCourseType/Update"
                                class="register-form"
                                id="register-form"
                              >
                                <div class="col">
                      <div class="row">
                        <div class="col-6 mb-3">
                          <label for="category-film" class="col-form-label">
                            Tên khóa học:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="category-film"
                            name="CourseName"
                            required
                          />
                        </div>
                        <div class="col-6 mb-3">
                          <label for="category-film" class="col-form-label">
                            Giá:
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="category-film"
                            name="Price"
                            min="0"
                            value="0"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6 mb-3">
                          <label for="category-film" class="col-form-label">
                            Danh mục khóa học:
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="theloai"
                            tabindex="8"
                            name="CourseTypeId"
                            required
                          >
                            <option selected value="">
                              Chọn danh mục khóa học
                            </option>
                              <option value="@item3.CourseTypeId">
                                Lập trình website
                              </option>
                              <option value="@item3.CourseTypeId">
                                Lập trình ứng dụng
                              </option>
                              <option value="@item3.CourseTypeId">
                                Lập trình phần mềm
                              </option>
                          </select>
                        </div>
                        <div class="col-6 mb-3">
                          <label for="category-film" class="col-form-label">
                            Ảnh:
                          </label>
                          <br />
                          <input
                            type="file"
                            name="file"
                            class="form-control-file"
                            id="exampleFormControlFile1"
                            required
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 mb-3">
                          <label for="category-film" class="col-form-label">
                            Mô tả:
                          </label>
                          <textarea
                            name="Description"
                            cols="100"
                            id="editor"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Đóng
                                  </button>
                                  <button type="submit" class="btn btn-primary">
                                    Lưu
                                  </button>
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
          <div
            class="modal fade"
            id="exampleModalAdd"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Thêm mới
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form
                    method="POST"
                    action="/AdminCourse/Add"
                    class="register-form"
                    id="register-form"
                    enctype="multipart/form-data"
                  >
                    <div class="col">
                      <div class="row">
                        <div class="col-6 mb-3">
                          <label for="category-film" class="col-form-label">
                            Tên khóa học:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="category-film"
                            name="CourseName"
                            required
                          />
                        </div>
                        <div class="col-6 mb-3">
                          <label for="category-film" class="col-form-label">
                            Giá:
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="category-film"
                            name="Price"
                            min="0"
                            value="0"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6 mb-3">
                          <label for="category-film" class="col-form-label">
                            Danh mục khóa học:
                          </label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            id="theloai"
                            tabindex="8"
                            name="CourseTypeId"
                            required
                          >
                            <option selected value="">
                              Chọn danh mục khóa học
                            </option>
                              <option value="@item3.CourseTypeId">
                                Lập trình website
                              </option>
                              <option value="@item3.CourseTypeId">
                                Lập trình ứng dụng
                              </option>
                              <option value="@item3.CourseTypeId">
                                Lập trình phần mềm
                              </option>
                          </select>
                        </div>
                        <div class="col-6 mb-3">
                          <label for="category-film" class="col-form-label">
                            Ảnh:
                          </label>
                          <br />
                          <input
                            type="file"
                            name="file"
                            class="form-control-file"
                            id="exampleFormControlFile1"
                            required
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12 mb-3">
                          <label for="category-film" class="col-form-label">
                            Mô tả:
                          </label>
                          <textarea
                            name="Description"
                            cols="100"
                            id="editor"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Đóng
                      </button>
                      <button type="submit" class="btn btn-primary">
                        Lưu{' '}
                      </button>
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
  )
}

export default Course
