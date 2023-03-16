import React from 'react';
import { Link } from 'react-router-dom';

function Thankyou() {
  return (
    <div>
      <h1>Thank You!</h1>
      <p>Thank you for your interest. We appreciate your interest and will be in touch shortly.</p>
      <Link to='/'>
     <button className="login-btn">Go back</button>
    </Link>
    </div>
     
  );
}

export default Thankyou;