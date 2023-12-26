// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
const CourseType = () => {
    const [courseTypes, setCourseTypes] = useState([]);
  const [newCourseTypeName, setNewCourseTypeName] = useState('');
  const [selectedCourseTypeId, setSelectedCourseTypeId] = useState(null);


  useEffect(() => {
    // Gọi API để lấy danh sách loại khóa học
    fetch('http://localhost:8080/api/courseTypes')
      .then(response => response.json())
      .then(data => setCourseTypes(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleAddCourseType = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/courseTypes', {
        typeName: newCourseTypeName,
      });

      if (response.status === 200) {
        // Nếu thành công, cập nhật danh sách loại khóa học
        setCourseTypes([...courseTypes, response.data]);
        // Đóng modal thêm mới
        document.getElementById('exampleModalAdd').click();
        // Reset giá trị
        setNewCourseTypeName('');
        // Hiển thị thông báo thành công
        toast.success('Thành công!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdateCourseType = async (courseTypeId) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/courseTypes/${courseTypeId}`, {
        typeName: newCourseTypeName,
      });

      if (response.status === 200) {
        // Nếu thành công, cập nhật danh sách loại khóa học
        const updatedCourseTypes = courseTypes.map(courseType =>
          courseType.courseTypeId === courseTypeId ? response.data : courseType
        );
        setCourseTypes(updatedCourseTypes);
        // Đóng modal cập nhật
        document.getElementById('idEx1-'+ courseTypeId).click();
        // Reset giá trị
        setNewCourseTypeName('');
         // Hiển thị thông báo thành công
         toast.success('Thành công!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteCourseType = async (courseTypeId) => {
    try {
      await axios.delete(`http://localhost:8080/api/courseTypes/${courseTypeId}`);

      // Nếu thành công, cập nhật danh sách loại khóa học
      const updatedCourseTypes = courseTypes.filter(courseType => courseType.courseTypeId !== courseTypeId);
      setCourseTypes(updatedCourseTypes);
      // Đóng modal xóa
      document.getElementById('idModelDel-' + courseTypeId).click();
          // Hiển thị thông báo thành công
        toast.success('Thành công!');
    } catch (error) {
      console.error('Error:', error);
    }
  };
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
                    {courseTypes.map((courseType, index) => (
                        <tr key={index}>
                            <td style={{ width: '10px' }}>{index + 1}</td>
                            <td>{courseType.typeName}</td>
                            <td>
                                <button
                                    style={{ width: '100px' }}
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#idEx1-${courseType.courseTypeId}`}
                                    onClick={() => setSelectedCourseTypeId(courseType.courseTypeId)}
                                >
                                    Sửa
                                </button>
                                <button
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#idModelDel-${courseType.courseTypeId}`}
                                    style={{ width: '100px' }}
                                    className="btn btn-danger"
                                    onClick={() => setSelectedCourseTypeId(courseType.courseTypeId)}
                                >
                                    Xóa
                                </button>
                                
                                <div class="modal fade" id={`idModelDel-${courseType.courseTypeId}`} tabindex="-1"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Bạn chắc chắn muốn xóa ?</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                </div>

                                                <div class="modal-body">
                                                    Loại khóa học : {courseType.typeName}
                                                    <form action="" method="post">
                                                        
                                                        <div class="modal-footer" style={{ marginTop: '20px' }}>
                                                            <button style={{ width: '100px' }} type="button" class="btn btn-secondary"
                                                                    data-bs-dismiss="modal">
                                                                Đóng
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-danger"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleDeleteCourseType(courseType.courseTypeId);
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

                                    <div class="modal fade" id={`idEx1-${courseType.courseTypeId}`} tabindex="-1"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Cập nhật</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form method="POST" action="" class="register-form" id="register-form">
                                        
                                                <div class="mb-3">
                                                    <label for="category-film"
                                                           class="col-form-label">Tên loại khóa học:</label>
                                                    <input type="text" class="form-control"  id="typeName"
                                                        name="TypeName"
                                                        defaultValue={courseType.typeName}
                                                        onChange={(e) => setNewCourseTypeName(e.target.value)} required/>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">
                                                        Đóng
                                                    </button>
                                                    <button type="submit" class="btn btn-primary"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleUpdateCourseType(courseType.courseTypeId);
                                                    }}>Lưu</button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                    ))}
                                    
                            
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
                <form method="POST" class="register-form" id="register-form">
                    <div class="mb-3">
                        <label for="category-film"
                               class="col-form-label">Tên loại khóa học:</label>
                        <input
                        type="text"
                        className="form-control"
                        id="typeName"
                        name="TypeName"
                        value={newCourseTypeName}
                        onChange={(e) => setNewCourseTypeName(e.target.value)}
                        required
                        />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                                data-bs-dismiss="modal">
                            Close
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                handleAddCourseType(newCourseTypeName);
                            }}
                            >
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
  );
};

export default CourseType;
