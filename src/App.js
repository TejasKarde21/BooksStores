// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookProvider } from './context/BookContext';

import BooksPages from './components/BooksPages';
import BooksList from './components/BooksList';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Sign from "./components/Sign";
import Footer from './components/Footer';



function App() {
 
  

  return (
    <Router>
    
    <Navbar/>
      <BookProvider>
      
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/books/:listName" element={<BooksPages />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Sign" element={<Sign/>} />
        </Routes>
      </BookProvider>
      <Footer/>
    </Router>
  );
}

export default App;