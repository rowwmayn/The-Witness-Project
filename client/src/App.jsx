import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Body from './components/Body';
import ArticlePage from './components/ArticlePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
