import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const Logger = () => {
  return (
    <div>
        <h3>
            You Have Logged In Successfully<br/>
        </h3>
      <Link to='/StudentDetails'>
        Add Student Details
      </Link>
    </div>
  )
}

export default Logger;