import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={
            <ProtectedRoute element={<Cart />} />
          } />
          <Route path='/order' element={
            <ProtectedRoute element={<PlaceOrder />} />
          } />
          <Route path='/myorders' element={
            <ProtectedRoute element={<MyOrders />} />
          } />
          <Route path='/verify' element={
            <ProtectedRoute element={<Verify />} />
          } />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
