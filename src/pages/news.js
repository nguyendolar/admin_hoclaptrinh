import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from '../components/datatable';
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS styles for the editor
const EditForm = ({ course, courseTypes, onSave, onCancel, onUpdate }) => {
  //const [editedTypeName, setEditedTypeName] = useState(course.typeName);
  const emptyFile = new File([], "filename.txt", { type: "text/plain" });
  const [editCourse, setEditCourse] = useState({
    CourseName: course.title,
    file: emptyFile,
    Description: course.content,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    console.log("sss:", e);
    setEditCourse((prevCourse) => ({
      ...prevCourse,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSave = async () => {
    try {
      // Gọi hàm onUpdate để cập nhật thông tin trên server
      await onUpdate(course.courseId, editCourse);
      // Gọi onSave để lưu thông tin đã chỉnh sửa và đóng form
      onSave({ ...course, typeName: editCourse });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal show={true} onHide={onCancel} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="col">
  <div className="row">
    <div className="col-6 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Tên tin tức:
      </label>
      <input
        type="text"
        className="form-control"
        id="category-film"
        name="CourseName"
        value={editCourse.CourseName}
        onChange={handleInputChange}
        required
      />
    </div>
    <div className="col-6 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Giá:
      </label>
      <input
        type="number"
        className="form-control"
        id="category-film"
        name="Price"
        min="0"
        value={editCourse.Price}
        onChange={handleInputChange}
      />
    </div>
  </div>
  <div className="row">
    <div className="col-6 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Danh mục tin tức:
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="theloai"
        tabIndex="8"
        name="CourseTypeId"
        value={editCourse.CourseTypeId}
        onChange={handleInputChange}
        required
      >
        {courseTypes.map((courseType) => (
          <option key={courseType.courseTypeId} value={courseType.courseTypeId} selected={courseType.courseTypeId === editCourse.CourseTypeId}>
            {courseType.typeName}
          </option>
        ))}
      </select>
    </div>
    <div className="col-6 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Ảnh:
      </label>
      <br />
      <input
        type="file"
        name="file"
        className="form-control-file"
        id="exampleFormControlFile1"
        onChange={handleInputChange}
      />
    </div>
  </div>
  <div className="row">
    <div className="col-12 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Mô tả:
      </label>
      <ReactQuill
        id="editor"
        value={editCourse.Description}
        onChange={(value) => setEditCourse((prevCourse) => ({ ...prevCourse, Description: value }))}
        placeholder="Nhập nội dung ở đây..."
        style={{ height: '400px' }}
      />
    </div>
  </div>
</div>

      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={onCancel}>
          Hủy
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
const News = () => {
  const [courses, setCourses] = useState([]);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourseName, setNewCourseName] = useState(''); 
  // Thêm state để lưu trữ file đã chọn
  const [selectedFile, setSelectedFile] = useState(null);
  const [newCourse, setNewCourse] = useState({
    CourseName: '',
    file: null,
    Description: '',
  });
  const [courseTypes, setCourseTypes] = useState([]);

  const handleEditClick = (row) => {
    // Mở form khi bấm vào nút "Sửa" và truyền đối tượng cần sửa vào state
    setEditFormOpen(true);
    setSelectedCourse(row.original);
  };

  const handleSaveEdit = (editedCourse) => {
    // Xử lý lưu thông tin đã chỉnh sửa vào đối tượng gốc
    // (có thể gửi lên server, cập nhật trong danh sách, ...)
    console.log('Thông tin đã chỉnh sửa:', editedCourse);
    // Đóng form sau khi lưu
    setEditFormOpen(false);
  };

  // Hàm xử lý khi file thay đổi
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleCancelEdit = () => {
    // Đóng form khi bấm hủy
    setEditFormOpen(false);
  };

  useEffect(() => {
    // Gọi API để lấy danh sách loại tin tức
    fetch('http://localhost:8080/api/news')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error:', error));
  }, []);


  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    console.log("sss:", e);
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/news');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      // Tạo một FormData để gửi file và dữ liệu khác
      const formData = new FormData();
      formData.append('CourseName', newCourse.CourseName);
      formData.append('file', newCourse.file);
      formData.append('Description', newCourse.Description);
      const response = await axios.post('http://localhost:8080/api/news', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

      if (response.status === 200) {
        // Nếu thành công, cập nhật Danh sách tin tức
        // (Cần phải gọi API để lấy Danh sách tin tức mới)
        fetchData();
        // Đóng modal thêm mới
        document.getElementById('exampleModalAdd').click();
        // Reset giá trị
        setNewCourse({
          CourseName: '',
          file: null,
          Description: '',
        });
        // Hiển thị thông báo thành công
        toast.success('Thành công!');
      }
    } catch (error) {
      console.error('Error:', error);
      // Đóng modal thêm mới
      document.getElementById('exampleModalAdd').click();
      // Hiển thị thông báo lỗi
      toast.error('Đã xảy ra lỗi khi thêm tin tức.');
    }
  };
  
  const handleUpdateCourse = async (courseId, editCourse) => {
    try {
      const formData = new FormData();
      formData.append('CourseName', editCourse.CourseName);
      formData.append('Price', editCourse.Price);
      formData.append('file', editCourse.file);
      formData.append('CourseTypeId', editCourse.CourseTypeId);
      formData.append('Description', editCourse.Description);
  
      const response = await axios.put(`http://localhost:8080/api/courses/${courseId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 200) {
        // Nếu thành công, cập nhật Danh sách tin tức
        fetchData();
        // Hiển thị thông báo thành công
        toast.success('Thành công!');
      }
    } catch (error) {
      console.error('Error:', error);
      // Đóng modal cập nhật
      document.getElementById(`idEx1-${editCourse.courseId}`).click();
      // Hiển thị thông báo lỗi
      toast.error('Đã xảy ra lỗi khi cập nhật tin tức.');
    }
  };
  

  const handleDeleteCourse = async (courseId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/courses/${courseId}`);
      if (response.data === true){
      // Nếu thành công, cập nhật danh sách loại tin tức
      const updatedCourses= courses.filter(course => course.courseId !== courseId);
      setCourses(updatedCourses);
      // Đóng modal xóa
      document.getElementById('idModelDel-' + courseId).click();
          // Hiển thị thông báo thành công
        toast.success('Thành công!');
            // Gọi lại hàm fetchData để fetch dữ liệu mới
        fetchData();
      } else {
        // Đóng modal xóa
        document.getElementById('idModelDel-' + courseId).click();
        // Nếu API trả về false, hiển thị toast thất bại
        toast.error('Thất bại!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  //data table
  const columns = React.useMemo(
    () => [
      {
        Header: 'STT',
        accessor: (row, index) => index + 1,
      },
      {
        Header: 'Tiêu đề',
        accessor: 'title',
      },
      {
        Header: 'Ảnh',
        accessor: 'image',
        Cell: ({ value }) => (
          <img   alt="course"
            style={{
            width: '250px',
            height: '150px',
            important: 'true',
          }} src={value} class="img-fluid" />
        ),
      },
      {
        Header: 'Nội dung',
        accessor: 'content',
        Cell: ({ row }) => (
            <>
              <a href='/'
                data-bs-toggle="modal"
                data-bs-target={`#idModelDes-${row.original.newsId}`}
                style={{ width: '100px', marginRight : '5px' }}
                // className="btn btn-warning"
              >
                Xem
              </a>
              {/* Modal Mô tả */}
              <div className="modal fade" id={`idModelDes-${row.original.newsId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">{row.original.title}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
    
                    <div class="modal-body">
                      <div dangerouslySetInnerHTML={{ __html: row.original.content }} />
                        <div class="modal-footer">
                          <button style={{ width: '100px' }} type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Đóng
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </>
        ),
      },
      {
        Header: 'Thao tác',
        accessor: 'newsId',
        Cell: ({ row }) => (
            <>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target={`#idModelDes-${row.original.courseId}`}
                style={{ width: '100px', marginRight : '5px' }}
                className="btn btn-warning"
              >
                Mô tả
              </button>
              <button
              style={{ width: '100px' }}
              type="button"
              className="btn btn-primary"
              onClick={() => handleEditClick(row)}
              >
              Sửa
            </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target={`#idModelDel-${row.original.courseId}`}
                style={{ width: '100px', marginLeft : '5px' }}
                className="btn btn-danger"
              >
                Xóa
              </button>
              {/* Modal Mô tả */}
              <div className="modal fade" id={`idModelDes-${row.original.courseId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">{row.original.courseName}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
    
                    <div class="modal-body">
                      <div dangerouslySetInnerHTML={{ __html: row.original.description }} />
                        <div class="modal-footer">
                          <button style={{ width: '100px' }} type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Đóng
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal Xóa */}
              <div className="modal fade" id={`idModelDel-${row.original.courseId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Bạn chắc chắn muốn xóa ?</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
    
                    <div class="modal-body">
                      tin tức : {row.original.courseName}
                      <form action="" method="post">
    
                        <div class="modal-footer" style={{ marginTop: '20px' }}>
                          <button style={{ width: '100px' }} type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Đóng
                          </button>
                          <button
                            type="submit"
                            className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDeleteCourse(row.original.courseId);
                            }}
                          >
                            Xóa
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </>
        ),
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
              <h1 class="mt-4">Danh sách tin tức</h1>
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
                <DataTable columns={columns} data={courses} />
                {editFormOpen && (
              <EditForm
                course={selectedCourse}
                courseTypes={courseTypes}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
                onUpdate={handleUpdateCourse}
                />
                )}
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
      className="register-form"
      id="register-form"
      encType="multipart/form-data"
      onSubmit={handleAddCourse}
    >
      <div className="col">
  <div className="row">
    <div className="col-12 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Tiêu đề:
      </label>
      <input
        type="text"
        className="form-control"
        id="category-film"
        name="CourseName"
        value={newCourse.CourseName}
        onChange={handleInputChange}
        required
      />
    </div>
  </div>
  <div className="row">
    <div className="col-12 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Ảnh:
      </label>
      <br />
      <input
        type="file"
        name="file"
        className="form-control-file"
        id="exampleFormControlFile1"
        onChange={handleInputChange}
        required
      />
    </div>
  </div>
  <div className="row">
    <div className="col-12 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Mô tả:
      </label>
      <ReactQuill
        id="editor"
        value={newCourse.Description}
        onChange={(value) => setNewCourse((prevCourse) => ({ ...prevCourse, Description: value }))}
        placeholder="Nhập nội dung ở đây..."
        style={{ height: '400px' }}
      />
    </div>
  </div>
</div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Đóng
        </button>
        <button type="submit" className="btn btn-primary">
          Lưu
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

export default News
