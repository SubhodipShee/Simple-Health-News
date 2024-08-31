
import React from 'react';
import './Category.css';

const Category = ({ setCategory }) => {
  const categories = ['Nutrition', 'Exercise', 'Mental Health', 'General'];

  return (
    <div className="category-filter">
      <select onChange={(e) => setCategory(e.target.value)} className="filter-select">
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default Category;
