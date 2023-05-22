import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { addBook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';


const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate("/show_book",{replace:true});
  }

  return (
    <div className="container w-50 vh-100">
      <h2 className='text-center'>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" value={title} name="title" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} required/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control"  value={author} name="author" placeholder="Enter Author" onChange={(e)=>setAuthor(e.target.value)} required/>
        </div>
        <div className="form-group">
          <button type="submit" className="form-control btn btn-sm btn-outline-success">Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default AddBook