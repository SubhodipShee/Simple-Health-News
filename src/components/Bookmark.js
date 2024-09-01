
import React, { useState, useEffect } from 'react';
import './Bookmark.css';

const Bookmark = ({ article }) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
  
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const isBookmarked = savedBookmarks.some((item) => item.url === article.url);
    setBookmarked(isBookmarked);
  }, [article]);

  const toggleBookmark = () => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    let updatedBookmarks;

    if (bookmarked) {
      
      updatedBookmarks = savedBookmarks.filter((item) => item.url !== article.url);
    } else {
      
      updatedBookmarks = [...savedBookmarks, article];
    }

    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    setBookmarked(!bookmarked);
  };

  return (
    <button
      className={`bookmark-btn ${bookmarked ? 'bookmarked' : ''}`}
      onClick={toggleBookmark}
    >
      {bookmarked ? 'Unbookmark' : 'Bookmark'}
    </button>
  );
};

export default Bookmark;
