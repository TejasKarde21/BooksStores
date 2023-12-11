// BookContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://books-backend.p.goit.global/books/top-books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <BookContext.Provider value={{ books }}>
      {children}
    </BookContext.Provider>
  );
};
