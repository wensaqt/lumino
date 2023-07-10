import './Article.css'
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Article = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  
  const contentRef = useRef(null);
  
  useEffect(() => {
    setContentHeight(`${contentRef.current.scrollHeight}px`);
  }, [article]);

  const handleToggleExpanded = () => {
      setIsExpanded(!isExpanded);
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
      </div>
    </section>
  );
};

export default Article;