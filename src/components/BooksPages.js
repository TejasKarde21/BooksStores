import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';
import BooksList from './BooksList';
import ListBrand from './ListBrand';

function BooksPage() {
  const { books } = useBookContext();
  const { listName } = useParams();
  const [selectedBook, setSelectedBook] = useState(null);
  const [isQuickViewVisible, setIsQuickViewVisible] = useState(false);

  const handleQuickViewClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseQuickView = () => {
    setSelectedBook(null);
  };

  const handleMouseEnter = () => {
    setIsQuickViewVisible(true);
  };

  const handleMouseLeave = () => {
    setIsQuickViewVisible(false);
  };

  // Check if the route is for "All Category"
  if (listName === '' || listName === "all") {
    // Render all books for all categories
    return (
      <div className='relative sm:flex-wrap'>
     <div className='sm:flex-wrap'>
        <BooksList />
        <ListBrand/>
        

</div>
        <div className='ml-[33vw] mt-16'>
          <h1 className='text-5xl font-semibold '>
            Best Sellers <span className='text-blue-600'>Books</span>{' '}
          </h1>
          {books.map((category) => (
            <div key={category.list_name}>
              <h2 className='text-gray-400 font-semibold text-xl mt-6'>
                {category.list_name}
              </h2>
              <br />
              <div className='grid grid-cols-4 w-[60vw]'>
                {category.books.map((book) => (
                  <div
                    key={book._id}
                    className='gap-8 flex flex-col items-start text-xl overflow-hidden w-[90%] rounded-md mb-8 pb-2'
                  >
                    <div
                      className='w-full h-full relative'
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={book.book_image}
                        alt={book.title}
                        className='h-[100%] w-full relative cursor-pointer'
                      />
                      {isQuickViewVisible && (
                        <div className='w-full h-[20%] bottom-0 absolute flex justify-center items-center transition-all ease-in-out bg-yellow-300'>
                          <button onClick={() => handleQuickViewClick(book)}>Quick View</button>
                          
                        </div>
                      )}
                    </div>
                    <h3 className='heading text-xl'>{book.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick View Modal */}
        {selectedBook && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-8 rounded-md'>
              <h2 className='text-2xl font-semibold mb-4'>{selectedBook.title}</h2>
              <img
                src={selectedBook.book_image}
                alt={selectedBook.title}
                className='w-full h-[300px] object-cover mb-4'
              />
              <a href={selectedBook.buy_links.url}>{selectedBook.buy_links.name}</a>
              {/* Add other details you want to show in the Quick View */}
              <button className='bg-blue-600 text-white px-4 py-2 rounded-md' onClick={handleCloseQuickView}>
                Close
              </button>
              <button >Add To Cart</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Render books for a specific category
  const selectedList = books.find((category) => category.list_name === listName);

  return (
    <div>
      <BooksList />
      <div className='ml-[33vw] mt-16'>
        <h2 className='text-5xl font-semibold '>{selectedList.list_name}</h2>
        <br />
        <div className='grid grid-cols-4 w-[60vw]'>
          {selectedList.books.map((book) => (
            <div
              key={book._id}
              className='gap-8 flex flex-col items-start text-xl overflow-hidden w-[90%] rounded-md border-2 border-blue-600 mb-8 pb-2'
            >
              <div
                className='w-full h-full relative'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={book.book_image}
                  alt={book.title}
                  className='h-[100%] w-full relative cursor-pointer'
                />
                {isQuickViewVisible && (
                  <div className='w-full h-[20%] bottom-0 absolute flex justify-center items-center transition-all ease-in-out bg-yellow-300'>
                    <button onClick={() => handleQuickViewClick(book)}>Quick View</button>
                  </div>
                )}
              </div>
              <h3 className='heading text-xl'>{book.title}</h3>
              <h3 className='heading -mt-7 text-gray'>{book.author}</h3>
            </div>
          ))}
        </div>
      </div>
      {selectedBook && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-8 rounded-md'>
            <h2 className='text-2xl font-semibold mb-4'>{selectedBook.title}</h2>
            <img
              src={selectedBook.book_image}
              alt={selectedBook.title}
              className='w-full h-[300px] object-cover mb-4'
            />
            {/* Add other details you want to show in the Quick View */}
            <button className='bg-blue-600 text-white px-4 py-2 rounded-md' onClick={handleCloseQuickView}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BooksPage;
