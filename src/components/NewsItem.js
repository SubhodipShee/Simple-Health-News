
import React from 'react';
import Bookmark from './Bookmark';
import './NewsItem.css';

const NewsItem = ({ article }) => {
  return (
    <div className="news-item">
      <img src={article.urlToImage} alt={article.title} className="news-image" />
      <div className="news-content">
        <h2 className="news-title">{article.title}</h2>
        <p className="news-description">{article.description}</p>
        <a href={article.url} className="news-link" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
        <Bookmark article={article} />
      </div>
    </div>
  );
};

export default NewsItem;
