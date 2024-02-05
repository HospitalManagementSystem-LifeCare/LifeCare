// function AddEmp() {
//     return ( <div>

// <center><h1>Add New Employee</h1></center>

// <div className='table-responsive'>
//         <table className='table table-bordered'>
//            <tbody>
//            <tr>
//                <td>Name :</td>
//                <td>
//                    <input type='text'
//                    />
//                </td>    
//            </tr>

//            <tr>
//                <td>Role :</td>
//                <td>
//                    <input type='text'
//                    />
//                </td>                                   
//            </tr>

//            <tr>
//                <td>Gender :</td>
//                <td>
//                    <div>
//                   <select>
//                    <option>Male</option>
//                    <option>Female</option>

//                   </select>

//                    </div>
//                </td>                                   
//            </tr>

//            <tr>
//                <td>Qualification :</td>
//                <td>
//                    <input type='text'
//                    />
//                </td>                                   
//            </tr>

//            <tr>
//                <td>Address :</td>
//                <td>
//                    <input type='text'
//                    />
//                </td>                                   
//            </tr>

//            <tr>
//                <td>DOB :</td>
//                <td>
//                    <input type='date'
//                    />
//                </td>                                   
//            </tr>

//            <tr>
//                <td>Email :</td>
//                <td>
//                    <input type='email' placeholder='123myhospital@gmail.com'
//                    />
//                </td>                                   
//            </tr>

//            <tr>
//                <td>Contact :</td>
//                <td>
//                    <input type='text'
//                    />
//                </td>                                   
//            </tr>

          

//            <tr>
//                <td></td>
//                <td>
//                    <button className='btn btn-success'  >Add Employee</button>
//                    {" "}
//                    <button className='btn btn-info' >Reset</button>
//                    {" "}
                   
//                </td>
//            </tr>

//            </tbody>
//         </table>
//       </div>

//     </div> );
// }

// export default AddEmp;


import React, { useState } from 'react';
import './AddEmployee.css';

const AddEmployee = ({ onAddEmployee, onCancel }) => {
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    gender:''	,
    qualification :''	,
    address :''	,
    dob :''	,
    email :''	,
    contact :''
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee(newEmployee);
  };

  return (
    <div className="add-employee-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        {/* Include form fields for each employee property */}
        <label>Name: <input type="text" name="name" value={newEmployee.name} onChange={handleInputChange} /></label>
        <label>Role: <input type="text" name="role" value={newEmployee.role} onChange={handleInputChange} /></label>
        <label>Gender: <input type="text" name="gender" value={newEmployee.gender} onChange={handleInputChange} /></label>
        <label>Qualification: <input type="text" name="qualification" value={newEmployee.qualification} onChange={handleInputChange} /></label>
        <label>Address: <input type="text" name="address" value={newEmployee.address} onChange={handleInputChange} /></label>
        <label>DOB: <input type="text" name="dob" value={newEmployee.dob} onChange={handleInputChange} /></label>
        <label>Email: <input type="text" name="email" value={newEmployee.email} onChange={handleInputChange} /></label>
        <label>Contact: <input type="text" name="contact" value={newEmployee.contact} onChange={handleInputChange} /></label>
        {/* ... other form fields */}

        <button type="submit" className="btn btn-success">Add Employee</button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddEmployee;


