import React, { useState } from "react";
import { Link } from 'react-router-dom'

function StudentFees() {
  const [billingList, setBillingList] = useState([]);
  const [newBilling, setNewBilling] = useState({
    studentName: "",
    billAmount: "",
    billDate: "",
    paidAmount: "",
    paidDate: "",
  });

  const handleInputChange = (event) => {
    setNewBilling({
      ...newBilling,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddBilling = (event) => {
    event.preventDefault();
    setBillingList([...billingList, newBilling]);
    setNewBilling({
      studentName: "",
      billAmount: "",
      billDate: "",
      paidAmount: "",
      paidDate: "",
    });
  };

  const handleDeleteBilling = (index) => {
    const newBillingList = billingList.filter((billing, i) => i !== index);
    setBillingList(newBillingList);
  };

  const handleUpdateBilling = (index, updatedBilling) => {
    const newBillingList = [...billingList];
    newBillingList[index] = updatedBilling;
    setBillingList(newBillingList);
  };

  return (
    <div>
      <h2>Billing and Payments Details</h2>
      <form onSubmit={handleAddBilling}>
        <label>
          Student Name:
          <input
            type="text"
            name="studentName"
            value={newBilling.studentName}
            onChange={handleInputChange}
          />
        </label><br/><br/>
        <label>
          Bill Amount:
          <input
            type="number"
            name="billAmount"
            value={newBilling.billAmount}
            onChange={handleInputChange}
          />
        </label><br/><br/>
        <label>
          Bill Date:
          <input
            type="date"
            name="billDate"
            value={newBilling.billDate}
            onChange={handleInputChange}
          />
        </label><br/><br/>
        <label>
          Paid Amount:
          <input
            type="number"
            name="paidAmount"
            value={newBilling.paidAmount}
            onChange={handleInputChange}
          />
        </label><br/><br/>
        <label>
          Paid Date:
          <input
            type="date"
            name="paidDate"
            value={newBilling.paidDate}
            onChange={handleInputChange}
          />
        </label><br/><br/>
        <Link to='/ReportBehavior'>
        <button type="submit">Go To ReportBehaviour Page</button>
        </Link>
      </form><br/><br/>
      <table>
        <tbody>
          {billingList.map((billing, index) => (
            <tr key={index}>
              <td>{billing.studentName}</td>
              <td>{billing.billAmount}</td>
              <td>{billing.billDate}</td>
              <td>{billing.paidAmount}</td>
              <td>{billing.paidDate}</td>
              <td>
                <button onClick={() => handleUpdateBilling(index, billing)}>

                  Update
                </button>
                <button onClick={() => handleDeleteBilling(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentFees;
