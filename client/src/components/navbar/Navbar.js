import React from 'react';
import { Link } from 'react-router-dom';


export default function () {
  return (
    <nav>
        
    <Link to ="/admin">Admin</Link>
    <Link to ="/login">Login</Link>
    <Link to ="/register">Register</Link>
    <Link to ="/user">User</Link>
        
    </nav>
  )
}
