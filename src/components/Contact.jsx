import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';

const Contact = () => {
  const user = { role: "admin" };

  if(user.role !== "admin") {
    return <Navigate to="/"></Navigate>
  }
  return (
    <>
      <div>
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <Link to="/contact/sales">Sales</Link>
          </li>
          <li>
            <Link to="/contact/sellers">Sellers</Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </>
  )
}

export default Contact;
