import Menu from './components/Menu'
import Question from './components/Question'
import Result from './components/Result'
import './global.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const getProducts = async () => {
    var savedData = JSON.parse(localStorage.getItem('products'));
    if (!savedData) {
      const response = await fetch('https://jeval.com.au/collections/hair-care/products.json?page=1');
      const data = await response.json();
      localStorage.setItem('products', JSON.stringify(data));
    }
  };

  useEffect(() => {
    getProducts();
    console.log(JSON.parse(localStorage.getItem('products')));
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/question/:questionId' element={<Question />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </>
  )
}

export default App
