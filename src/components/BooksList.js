// BooksList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';


function BooksList() {
  const { books } = useBookContext();

  return (
    <>
   
    <div className='border-2 text-2xl pl-9 w-[30%] h-[80vh] mt-[15vh] overflow-y-scroll  md:absolute sm:relative'>
      <h1 className='no-underline hover:text-blue-600 hover:scale-x-105 transition-transform mt-10 mb-12'>
        <Link to={`/books/all`} className='list-none no-underline'>All Category</Link>
      </h1>
      {books.map((list) => (
        <div key={list.list_name}>
          <h2 className='no-underline hover:text-blue-600 hover:scale-x-105 transition-transform mt-10 mb-12'>
            <Link to={`/books/${list.list_name}`}>{list.list_name}</Link>
          </h2>
        </div>
      ))}
    </div>
    </>
  );
}

export default BooksList;
