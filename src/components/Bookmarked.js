
import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import './News.css';

const Bookmarked = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedArticles(savedBookmarks);
  }, []);

  return (
    <div className="news-list">
      {bookmarkedArticles.length > 0 ? (
        bookmarkedArticles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))
      ) : (
        <p>No bookmarked articles.</p>
      )}
    </div>
  );
};

export default Bookmarked;
