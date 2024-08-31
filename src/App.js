
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/News';
import Category from './components/Category';
import './App.css';


const App = () => {
  const [category, setCategory] = useState('General');

  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title">Health News</h1>
        <Category setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<News category={category} />} />
          
        </Routes>
      </div>
    </Router>
  );
};




export default App;
