// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
import DataTable from '../components/datatable';
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
    //   handleInputChange('12345');
    console.log("ss" + newCourseTypeName);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/courseTypes');
      const data = await response.json();
      setCourseTypes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
  const handleUpdateCourseType = async e => {
    console.log("newCourseTypeName:", newCourseTypeName);
    console.log("e.original.courseTypeId:", e.original.courseTypeId);
    //e.preventDefault();
    // try {
    //   const response = await axios.put(`http://localhost:8080/api/courseTypes/${e.original.courseTypeId}`, {
    //     typeName: newCourseTypeName,
    //   });
  
    //   if (response.status === 200) {
    //     // Nếu thành công, cập nhật danh sách loại khóa học
    //     const updatedCourseTypes = courseTypes.map(courseType =>
    //       courseType.courseTypeId === e.original.courseTypeId ? response.data : courseType
    //     );
    //     setCourseTypes(updatedCourseTypes);
    //     // Đóng modal cập nhật
    //     document.getElementById('idEx1-' + e.original.courseTypeId).click();
    //     // Reset giá trị
    //     setNewCourseTypeName('');
    //     // Hiển thị thông báo thành công
    //     toast.success('Thành công!');
    //     fetchData();
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };
  
  const handleInputChange = async e => {
     console.log("New value:", e.target.value);
     console.log(typeof(e.target.value));
    //const  delay = (ms) => new Promise(res => setTimeout(res, ms));
    // await delay(5000);
    setNewCourseTypeName(e.target.value);
    console.log("a:", newCourseTypeName);
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
            // Gọi lại hàm fetchData để fetch dữ liệu mới
        fetchData();
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
        Header: 'Tên',
        accessor: 'typeName',
      },
      {
        Header: 'Thao tác',
        accessor: 'courseTypeId',
        Cell: ({ row }) => (
            <>
              <button
                style={{ width: '100px' }}
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#idEx1-${row.original.courseTypeId}`}
              >
                Sửa
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target={`#idModelDel-${row.original.courseTypeId}`}
                style={{ width: '100px', marginLeft : '5px' }}
                className="btn btn-danger"
              >
                Xóa
              </button>
    
              {/* Modal Xóa */}
              <div className="modal fade" id={`idModelDel-${row.original.courseTypeId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Bạn chắc chắn muốn xóa ?</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
    
                    <div class="modal-body">
                      Loại khóa học : {row.original.typeName}
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
                              handleDeleteCourseType(row.original.courseTypeId);
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
    
              {/* Modal Sửa */}
              <div className="modal fade" id={`idEx1-${row.original.courseTypeId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Cập nhật</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form method="POST" action="" className="register-form" id="register-form">
          <div className="mb-3">
            <label htmlFor="category-film" className="col-form-label">Tên loại khóa học:</label>
            <input
              type="text"
              className="form-control"
              id="typeName"
              name="TypeName"
              defaultValue={row.original.typeName}
              onChange={(e) => {
                // e.preventDefault();
                console.log(e.target.value);
                setNewCourseTypeName(e.target.value);
                // console.log("newCourseTypeName" + newCourseTypeName);
              }} 
              required
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Đóng
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleUpdateCourseType}
            >
              Lưu
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
        <h1 class="mt-4">Danh sách loại khóa học</h1>
        <div class="card mb-4">
            <div class="card-header">
                <button type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#exampleModalAdd">
                    Thêm mới
                </button>
            </div>
            <div class="card-body">
            <DataTable columns={columns} data={courseTypes} />
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
            <form method="POST" className="register-form" id="register-form">
      <div className="mb-3">
        <label htmlFor="category-film" className="col-form-label">
          Tên loại khóa học:
        </label>
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
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            handleAddCourseType();
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
// const rootElement = document.getElementById('root');
// ReactDOM.render(<CourseType />, rootElement);
