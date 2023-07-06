import './Blog.css';
import Article from './Article';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const Blog = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    banner: '',
    pitch: '',
    content: ''
  });

  const auth = useSelector((state) => state.auth);
  const authorId = auth.user ? auth.user.id : null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddArticle = async (e) => {
    e.preventDefault();

    const updatedFormData = { ...formData, authorId: authorId };

    try {
      const response = await axios.post('http://127.0.0.1:5500/articles/add', updatedFormData);
      console.log(response.data);

      setFormData({
        title: '',
        banner: '',
        pitch: '',
        content: ''
      });
      setShowAddForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <section className="blogContainer">
      <div className="blogMenu">
        <FontAwesomeIcon icon={faPlus} id="addArticle" onClick={handleToggleAddForm} />
      </div>
      {showAddForm && (
        <div className="addArticleForm">
          <form onSubmit={handleAddArticle} className="addArticleForm-form">
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
            <input type="text" name="banner" value={formData.banner} onChange={handleChange} placeholder="Banner URL" />
            <input type="text" name="pitch" value={formData.pitch} onChange={handleChange} placeholder="Pitch" />
            <textarea name="content" id="addArticle-content" value={formData.content} onChange={handleChange} placeholder="Content"></textarea>
            <button type="submit">Add Article</button>
          </form>
        </div>
      )}
      <div className="categoryNav-1">
        <h2>VIDEO GAMES</h2>
      </div>
      <div className="videoGamesArticles"></div>
      <div className="categoryNav-2">
        <h2>TECHNOLOGY</h2>
      </div>
      <div className="technologyArticles"></div>
    </section>
  );
};

export default Blog;