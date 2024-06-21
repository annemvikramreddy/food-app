import React from 'react';
import { Route, Navigate } from 'react-router-dom';



const ProtectedRoute = ({ element}) => {
  const token = localStorage.getItem('token');
  console.log(token)
  
    return token ? element : <Navigate to="/" />;
  
};

export default ProtectedRoute;

