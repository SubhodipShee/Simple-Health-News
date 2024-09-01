
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import NewsList from './components/News';
import Bookmarked from './components/Bookmarked';
import Category from './components/Category';
import './App.css';


const App = () => {
  const [category, setCategory] = useState('General');

  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title">Health News</h1>
        <Category setCategory={setCategory} />
        <nav>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/bookmarked" activeClassName="active">
            Bookmarked
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<NewsList category={category} />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

