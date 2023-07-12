import './Blog.css';
import Article from './Article';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/actions/categoryActions';
import { fetchArticles } from '../redux/actions/articleActions'; 
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';

const Blog = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingArticleId, setEditingArticleId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        banner: '',
        pitch: '',
        content: ''
    });

    const auth = useSelector((state) => state.auth);
    const authorId = auth.user ? auth.user.id : null;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchArticles());
    }, [dispatch]);

    const categories = useSelector(state => state.categories);
    const articles = useSelector((state) => state.articles);

    let videoGamesArticles = articles.filter(article => article.categoryId === 2);
    let technologyArticles = articles.filter(article => article.categoryId === 1);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleEditorChange = ({html, text}) => {
        setFormData({...formData, content: text});
    }

    const handleAddArticle = async (e) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('banner', file);
        formDataToSend.append('pitch', formData.pitch);
        formDataToSend.append('content', formData.content);
        formDataToSend.append('authorId', authorId);
        formDataToSend.append('categoryId', formData.categoryId);
    
        try {
            if(editingArticleId === null){
                const response = await axios.post('http://127.0.0.1:5500/articles/add', formDataToSend, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                });
                console.log(response.data);
            }else{
                const response = await axios.put(`http://127.0.0.1:5500/articles/${editingArticleId}`, formDataToSend, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                });
                console.log(response.data);
            }
    
            setFormData({
                title: '',
                banner: '',
                pitch: '',
                content: '',
                authorId: '',
                categoryId: ''
            });
            setFile(null);
            setEditingArticleId(null);
            setShowAddForm(false);
            dispatch(fetchArticles());
        } catch (error) {
            console.error(error);
        }
    };

    const handleEditArticle = (article) => {
        setFormData(article);
        setEditingArticleId(article.id);
        setShowAddForm(true);
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
                        <input type="file" name="banner" onChange={handleFileChange} placeholder="Upload Banner" />
                        <input type="text" name="pitch" value={formData.pitch} onChange={handleChange} placeholder="Pitch" />

                        <MdEditor 
                        value={formData.content}
                        style={{ minHeight: '500px', minWidth: '80%' }}
                        onChange={handleEditorChange}
                        placeholder="Content"
                        />

                        <select name="categoryId" value={formData.categoryId} onChange={handleChange}>
                            <option value="">Select Category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                        <button type="submit">{editingArticleId ? "Update Article" : "Add Article"}</button>
                    </form>
                </div>
            )}
            <div className="categoryNav-1">
                <h2>VIDEO GAMES</h2>
            </div>
            <div className="videoGamesArticles">
                {videoGamesArticles.map((article) => (
                    <Article key={article.id} article={article} onEditArticle={handleEditArticle} />
                ))}
            </div>
            <div className="categoryNav-2">
                <h2>TECHNOLOGY</h2>
            </div>
            <div className="technologyArticles">
                {technologyArticles.map((article) => (
                    <Article key={article.id} article={article} onEditArticle={handleEditArticle} />
                ))}
            </div>
        </section>
    );
};

export default Blog;
