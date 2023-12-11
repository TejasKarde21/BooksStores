// BooksList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';


function ShoppingCart() {
  const { books } = useBookContext();
  

  return (
    <>
   
    <div className='border-2 text-2xl pl-9 w-[30%] h-[80vh] mt-[15vh] overflow-y-scroll absolute'>
      <h1 className='no-underline hover:text-blue-600 hover:scale-x-105 transition-transform mt-10 mb-12'>
        <Link to={`/books/all`} className='list-none no-underline'>All Category</Link>
      </h1>
      {books.map((list) => (
        <div key={list.title}>
          <h2 className='no-underline hover:text-blue-600 hover:scale-x-105 transition-transform mt-10 mb-12'>
            <Link to={`/books/Shopping/${list.title}`}>{list.title}</Link>
          </h2>
        </div>
      ))}
    </div>
    </>
  );
}

export default ShoppingCart;