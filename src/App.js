import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/:imdbID" element={<MovieDetail />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
