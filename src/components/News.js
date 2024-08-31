
import React, { useEffect, useState } from 'react';
import { getHealthNews } from '../server/serverNews';
import NewsItem from './NewsItem';
import './News.css';

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getHealthNews(category);
      setArticles(data);
    };
    fetchNews();
  }, [category]);

  return (
    <div className="news-list">
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default News;
