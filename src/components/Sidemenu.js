// Sidemenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';
 // Import the CSS file

function Sidemenu() {
  const { books } = useBookContext();

  return (
    <div >
      {books.map((list) => (
        <div key={list.list_name}>
          <h2>
            <Link to={`/books/${list.list_name}`}>{list.list_name}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Sidemenu;