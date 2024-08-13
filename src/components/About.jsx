import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }
  return (
    <>
      <div>
        <h1>ABOUT</h1>

        <ul>
          <li>
            <Link to="/products/1">Product 1</Link>
          </li>
          <li>
            <Link to="/products/2">Product 2</Link>
          </li>
          <li>
            <Link to="/products/3">Product 3</Link>
          </li>
        </ul>

        <button onClick={handleBack}>Go Back</button>
      </div>
    </>
  )
}

export default About;
