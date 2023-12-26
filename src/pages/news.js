// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
const News = () => {
    const [newsList, setNewsList] = useState([]);
  const [newNewsTitle, setNewNewsTitle] = useState('');
  const [newNewsContent, setNewNewsContent] = useState('');
  const [newNewsImage, setNewNewsImage] = useState('');
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  useEffect(() => {
    // Gọi API để lấy danh sách tin tức
    fetch('http://localhost:8080/api/news')
      .then(response => response.json())
      .then(data => setNewsList(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleAddNews = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/news', {
        title: newNewsTitle,
        content: newNewsContent,
        image: newNewsImage,
      });

      if (response.status === 200) {
        // Nếu thành công, cập nhật danh sách tin tức
        setNewsList([...newsList, response.data]);
        // Đóng modal thêm mới
        document.getElementById('exampleModalAdd').click();
        // Reset giá trị
        setNewNewsTitle('');
        setNewNewsContent('');
        setNewNewsImage('');
        // Hiển thị thông báo thành công
        toast.success('Thành công!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdateNews = async (newsId) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/news/${newsId}`, {
        title: newNewsTitle,
        content: newNewsContent,
        image: newNewsImage,
      });

      if (response.status === 200) {
        // Nếu thành công, cập nhật danh sách tin tức
        const updatedNewsList = newsList.map(news =>
          news.newsId === newsId ? response.data : news
        );
        setNewsList(updatedNewsList);
        // Đóng modal cập nhật
        document.getElementById('idEx1-' + newsId).click();
        // Reset giá trị
        setNewNewsTitle('');
        setNewNewsContent('');
        setNewNewsImage('');
        // Hiển thị thông báo thành công
        toast.success('Thành công!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteNews = async (newsId) => {
    try {
      await axios.delete(`http://localhost:8080/api/news/${newsId}`);

      // Nếu thành công, cập nhật danh sách tin tức
      const updatedNewsList = newsList.filter(news => news.newsId !== newsId);
      setNewsList(updatedNewsList);
      // Đóng modal xóa
      document.getElementById('idModelDel-' + newsId).click();
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
                    {newsList.map((news, index) => (
                        <tr key={index}>
                            <td style={{ width: '10px' }}>{index + 1}</td>
                            <td>{news.title}</td>
                            <td>
                                <img
                                    alt="course"
                                    style={{
                                    width: '250px',
                                    height: '150px',
                                    important: 'true',
                                    }}
                                    src={news.image}
                                    class="img-fluid"
                                />
                                </td>
                                <td>
                                    <a href="/" data-bs-toggle="modal" data-bs-target={`#nameModelDes-${news.newsId}`}>Xem</a>
                                </td>
                            <td>
                                <button
                                    style={{ width: '100px' }}
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#idEx1-${news.newsId}`}
                                    onClick={() => setSelectedNewsId(news.newsId)}
                                >
                                    Sửa
                                </button>
                                <button
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#idModelDel-${news.newsId}`}
                                    style={{ width: '100px' }}
                                    className="btn btn-danger"
                                    onClick={() => setSelectedNewsId(news.newsId)}
                                >
                                    Xóa
                                </button>
                                
                                <div class="modal fade" id={`nameModelDes-${news.newsId}`} tabindex="-1"
                                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">{news.title}</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <p>{news.content}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade" id={`idModelDel-${news.newsId}`} tabindex="-1"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Bạn chắc chắn muốn xóa ?</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                </div>

                                                <div class="modal-body">
                                                    Tin tức : {news.title}
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
                                                                    handleDeleteNews(news.newsId);
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

                                    <div class="modal fade" id={`idEx1-${news.newsId}`} tabindex="-1"
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
                                                           class="col-form-label">Tiêu đề:</label>
                                                    <input type="text" class="form-control"  id="typeName"
                                                        name="TypeName"
                                                        defaultValue={news.title}
                                                        onChange={(e) => setNewNewsTitle(e.target.value)} required/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="category-film"
                                                           class="col-form-label">Ảnh:</label>
                                                    <input type="text" class="form-control"  id="image"
                                                        name="image"
                                                        defaultValue={news.image}
                                                        onChange={(e) => setNewNewsImage(e.target.value)} required/>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mb-3">
                                                        <label for="category-film"
                                                               class="col-form-label">Nội dung:</label>
                                                        <textarea
                                                            name="Content"
                                                            id="content"
                                                            cols="100"
                                                            rows="5"
                                                            className="form-control"
                                                            defaultValue={news.content}
                                                            onChange={(e) => setNewNewsContent(e.target.value)}
                                                            ></textarea>

                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">
                                                        Đóng
                                                    </button>
                                                    <button type="submit" class="btn btn-primary"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleUpdateNews(news.newsId);
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
                                                           class="col-form-label">Tiêu đề:</label>
                                                    <input type="text" class="form-control"  id="typeName"
                                                        name="TypeName"
                                                        value={newNewsTitle}
                                                        onChange={(e) => setNewNewsTitle(e.target.value)} required/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="category-film"
                                                           class="col-form-label">Ảnh:</label>
                                                    <input type="text" class="form-control"  id="image"
                                                        name="image"
                                                        value={newNewsImage}
                                                        onChange={(e) => setNewNewsImage(e.target.value)} required/>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mb-3">
                                                        <label for="category-film"
                                                               class="col-form-label">Nội dung:</label>
                                                        <textarea
                                                            name="Content"
                                                            id="content"
                                                            cols="100"
                                                            rows="5"
                                                            className="form-control"
                                                            value={newNewsContent}
                                                            onChange={(e) => setNewNewsContent(e.target.value)}
                                                            ></textarea>

                                                    </div>
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
                                handleAddNews(newNewsTitle);
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

export default News;
