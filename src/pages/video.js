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
const EditForm = ({ course, courseTypes, onSave, onCancel, onUpdate }) => {
  const [editCourse, setEditCourse] = useState({
    CourseName: course.videoName,
    CourseTypeId: course.course.courseId,
    Description: course.videoUrl,
  });
  const navigate = useNavigate();

  React.useEffect(() => {
      let token = localStorage.getItem("tokenAdmin");
      console.log("token", token);
      if (token == null )
      {
          navigate("/authen");
      }
  }, [])
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
      await onUpdate(course.courseVideoId, editCourse);
      // Gọi onSave để lưu thông tin đã chỉnh sửa và đóng form
      onSave({ ...course, typeName: editCourse });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="col">
  <div className="row">
    <div className="col-12 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Tên video:
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
  </div>
  <div className="row">
    <div className="col-12 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Link video:
      </label>
      <input
        type="text"
        className="form-control"
        id="category-film"
        name="Description"
        value={editCourse.Description}
        onChange={handleInputChange}
        required
      />
    </div>
  </div>
  <div className="row">
    <div className="col-12 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Khóa học:
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
          <option key={courseType.courseId} value={courseType.courseId} selected={courseType.courseId === editCourse.CourseTypeId}>
            {courseType.courseName}
          </option>
        ))}
      </select>
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
const Video = () => {
  const [courses, setCourses] = useState([]);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({
    CourseName: '',
    CourseTypeId: '',
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

  const handleCancelEdit = () => {
    // Đóng form khi bấm hủy
    setEditFormOpen(false);
  };

  useEffect(() => {
    // Gọi API để lấy danh sách loại khóa học
    fetch('http://localhost:8080/api/courseVideos')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error:', error));
    
    // Gọi API để lấy danh sách loại khóa học
    fetch('http://localhost:8080/api/courses')
    .then(response => response.json())
    .then(data => setCourseTypes(data))
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
      const response = await fetch('http://localhost:8080/api/courseVideos');
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
      formData.append('CourseTypeId', newCourse.CourseTypeId);
      formData.append('Description', newCourse.Description);

      const response = await axios.post('http://localhost:8080/api/courseVideos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

      if (response.status === 200) {
        // Nếu thành công, cập nhật danh sách khóa học
        // (Cần phải gọi API để lấy danh sách khóa học mới)
        fetchData();
        // Đóng modal thêm mới
        document.getElementById('exampleModalAdd').click();
        // Reset giá trị
        setNewCourse({
          CourseName: '',
          CourseTypeId: '',
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
      toast.error('Đã xảy ra lỗi khi thêm khóa học.');
    }
  };
  
  const handleUpdateCourse = async (courseId, editCourse) => {
    try {
      const formData = new FormData();
      formData.append('CourseName', editCourse.CourseName);
      formData.append('CourseTypeId', editCourse.CourseTypeId);
      formData.append('Description', editCourse.Description);
  
      const response = await axios.put(`http://localhost:8080/api/courseVideos/${courseId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 200) {
        // Nếu thành công, cập nhật danh sách khóa học
        fetchData();
        // Hiển thị thông báo thành công
        toast.success('Thành công!');
      }
    } catch (error) {
      console.error('Error:', error);
      // Đóng modal cập nhật
      document.getElementById(`idEx1-${editCourse.courseId}`).click();
      // Hiển thị thông báo lỗi
      toast.error('Đã xảy ra lỗi khi cập nhật khóa học.');
    }
  };
  

  const handleDeleteCourse = async (courseId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/courseVideos/${courseId}`);
      if (response.status === 200){
      // Nếu thành công, cập nhật danh sách loại khóa học
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
        Header: 'Tên video',
        accessor: 'videoName',
      },
      {
        Header: 'Video',
        accessor: 'videoUrl',
        Cell: ({ row }) => (
            <>
              <a href='/'
                data-bs-toggle="modal"
                data-bs-target={`#idModelDes-${row.original.courseVideoId}`}
                style={{ width: '100px', marginRight : '5px' }}
                // className="btn btn-warning"
              >
                Xem
              </a>
              {/* Modal Mô tả */}
              <div className="modal fade" id={`idModelDes-${row.original.courseVideoId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">{row.original.videoName}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
    
                    <div class="modal-body">
                    <iframe width="1104" height="621" src={row.original.videoUrl}
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen></iframe>
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
        Header: 'Khóa học',
        accessor: 'course.courseName',
      },
      {
        Header: 'Thao tác',
        accessor: 'courseVideoId',
        Cell: ({ row }) => (
            <>
              
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
                data-bs-target={`#idModelDel-${row.original.courseVideoId}`}
                style={{ width: '100px', marginLeft : '5px' }}
                className="btn btn-danger"
              >
                Xóa
              </button>
              {/* Modal Xóa */}
              <div className="modal fade" id={`idModelDel-${row.original.courseVideoId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Bạn chắc chắn muốn xóa ?</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
    
                    <div class="modal-body">
                     <strong>Video : </strong>  {row.original.videoName} <br></br>
                     <strong>của khóa học : </strong> {row.original.course.courseName}
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
                              handleDeleteCourse(row.original.courseVideoId);
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
              <h1 class="mt-4">Danh sách video khóa học</h1>
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
            <div class="modal-dialog">
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
        Tên video:
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
        Link video:
      </label>
      <input
        type="text"
        className="form-control"
        id="category-film"
        name="Description"
        value={newCourse.Description}
        onChange={handleInputChange}
        required
      />
    </div>
  </div>
  <div className="row">
    <div className="col-12 mb-3">
      <label htmlFor="category-film" className="col-form-label">
        Khóa học:
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="theloai"
        tabIndex="8"
        name="CourseTypeId"
        value={newCourse.CourseTypeId}
        onChange={handleInputChange}
        required
      >
        <option selected value="">
          Chọn khóa học
        </option>
        {courseTypes.map((courseType) => (
          <option key={courseType.courseId} value={courseType.courseId}>
            {courseType.courseName}
          </option>
        ))}
      </select>
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

export default Video
