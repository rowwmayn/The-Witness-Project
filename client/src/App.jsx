import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import ArticlePage from './components/ArticlePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <Header />
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
