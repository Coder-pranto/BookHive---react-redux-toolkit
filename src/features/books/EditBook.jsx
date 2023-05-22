import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './BooksSlice';

const EditBook = () => {

  const location = useLocation();
  
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate('/show_book', { replace: true });

  }
  return (
    <div className="container w-50 vh-100">
    <h2 className='text-center'>Edit Book</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" value={title} name="title" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} required/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control"  value={author} name="author" placeholder="Enter Author" onChange={(e)=>setAuthor(e.target.value)} required/>
      </div>
      <div className="form-group">
        <button type="submit" className="form-control btn btn-sm btn-outline-success">Update Book</button>
      </div>
    </form>
  </div>
  )
}

export default EditBook;