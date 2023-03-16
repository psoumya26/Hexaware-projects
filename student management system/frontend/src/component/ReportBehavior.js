import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

function ReportBehavior(props) {
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setMessage('Email sent successfully!');
      
      });
  }

  return (
    <div>
      <h1>Report Behavior</h1>
      <form onSubmit={sendEmail}>
        <label>
          Student name:
          <input type="text" name="student_name" required />
        </label><br/><br/>
        <label>
          Behavior:
          <textarea name="behavior" required />
        </label><br/><br/>
        <label>
          Parent email:
          <input type="email" name="parent_email" required />
        </label><br/><br/>
        <Link to='/Thankyou'>
        <button type="submit">Send Email</button>
        </Link>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ReportBehavior;
