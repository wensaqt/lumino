import './Article.css'
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Article = ({ article, onEditArticle }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  
  const contentRef = useRef(null);
  
  useEffect(() => {
    setContentHeight(`${contentRef.current.scrollHeight}px`);
  }, [article]);

  const handleToggleExpanded = () => {
      setIsExpanded(!isExpanded);
  };

  const handleEditArticle = () => {
    onEditArticle(article);
  };
  
  return (
    <section className="article">
      <div className="article-banner">
          <img src={`http://127.0.0.1:5500/${article.banner}`} alt={article.title} />
      </div>
      <div className="article-body">
        <div className="article-title">{article.title}</div>
        <div className="article-pitch">{article.pitch}</div>
        <div 
          ref={contentRef}
          style={{
            maxHeight: isExpanded ? `${contentHeight}` : "150px",
            transition: 'max-height 0.5s ease-in-out',
            overflow: 'hidden'
          }}
        >
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </div>
      <div className="article-footer">
          <div id="readMore-button" onClick={handleToggleExpanded}>{isExpanded ? 'Read less' : 'Read more'}</div>
          <div className="articleMenu"><FontAwesomeIcon icon={faEdit} id="editArticleIcon" onClick={handleEditArticle} /></div>
      </div>
    </section>
  );
};

export default Article;