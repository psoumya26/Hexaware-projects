import React, { useState } from "react";
import './style.css';
import { Link } from 'react-router-dom';

function StudentDetails() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, id, email, dob, gender, address };
    console.log(newStudent); // Replace with your desired code to save the new student data
    setName("");
    setId("");
    setEmail("");
    setDob("");
    setGender("");
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Student Details</h1>  
      <div>
        <label>
            Name:
            </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div><br/><br/>
      <div>
        <label>
            ID:
        </label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div><br/><br/>
      <div>
        <label>
            Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div><br/><br/>
      <div>
        <label>
                     Date of Birth:
        </label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div><br/><br/>
      <div>
        <label>
            Gender:
        </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div><br/><br/>
      <div>
        <label>
            Address:
            </label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div><br/><br/>

      <Link to='/StudentFees '>
      <button type="submit">Go to Student Fees Details</button>
      </Link>
    </form>
  );
}

export default StudentDetails;
