import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, updateBook } from './BooksSlice';
import { Link } from 'react-router-dom';

const ShowBook = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column table-hover vh-100 ">
      <h1 className="text-center">Book List</h1>
      <table className="table table-bordered  w-50">
        <thead className='thead-dark'>
          <tr className='text-center'>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book, index) => {
              const { id, title, author } = book;
              return (
                <tr key={index}>
                  <td>{id.slice(-5)}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td className='text-center'>
                  <Link  to='/edit_book' state={{id,title,author}}> <button type="button" className="btn btn-sm btn-outline-primary mx-2">Edit</button></Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(id)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBook;
