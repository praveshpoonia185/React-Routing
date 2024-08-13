import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import NotFound from './NotFound';
import SalesPage from './SalesPage';
import Sellers from './Sellers';

const AllRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/products/:id' element={<SingleProduct />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/contact/sales' element={<SalesPage />}></Route>
      <Route path='/contact/sellers' element={<Sellers />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export default AllRouting;