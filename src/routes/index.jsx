
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../layouts/navbar';
import AddBook from '../features/books/AddBook';
import ShowBook from '../features/books/ShowBook';
import EditBook from '../features/books/EditBook';
import { Footer } from '../layouts/footer';

const Index = () => {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error/>} />
        <Route path="/show_book" element={<ShowBook/>} />
        <Route path="/add_book" element={<AddBook/>} />
        <Route path="/edit_book" element={<EditBook/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
};

export default Index;
