// // function Employee() {
// //     return (
// //         <div className='container'>
// //               <center><h1>Employees</h1></center>
// //               <hr></hr>
          
// //               <hr></hr>
// //               <div className='table-responsive'>

// //               <button className='btn btn-primary'>+Add New Employee</button>
              

// //                <table className='table table-bordered'>
// //                   <thead>
// //                   <tr>
// //                       <th>Name</th>
// //                       <th>Role</th>
// //                       <th>Gender</th> 
// //                       <th>Qualification</th>
// //                       <th>Address</th>  
// //                       <th>DOB</th> 
// //                       <th>Email</th>      
// //                       <th>Contact</th>      
// //                       <th></th>      
                          

// //                   </tr>
// //                   </thead>
// //                   <tbody>                               
                                   

// //                                 <tr >
// //                                     <td>RK Sharma</td>
// //                                     <td>Doctor</td>
// //                                     <td>Male</td>
// //                                     <td>MBBS</td>
// //                                     <td>Nashik</td>
// //                                     <td>15-08-1985</td>
// //                                     <td>123@gmail.com</td>
// //                                     <td>8967542367</td>
// //                                     <th>
// //                                          <button className='btn btn-danger' >Remove</button>
// //                                     </th>               
// //                                 </tr>

// //                                 <tr >
// //                                     <td>HC Verma</td>
// //                                     <td>Doctor</td>
// //                                     <td>Male</td>
// //                                     <td>MS Ortho</td>
// //                                     <td>Delhi</td>
// //                                     <td>25-10-1965</td>
// //                                     <td>hc@gmail.com</td>
// //                                     <td>8667542367</td>
// //                                     <th>
// //                                          <button className='btn btn-danger' >Remove</button>
// //                                     </th>               
// //                                 </tr>

// //                                 <tr >
// //                                     <td>Nidhi P</td>
// //                                     <td>Receptionist</td>
// //                                     <td>Female</td>
// //                                     <td>MA</td>
// //                                     <td>Pune</td>
// //                                     <td>23-12-1995</td>
// //                                     <td>nidhi@gmail.com</td>
// //                                     <td>7167542367</td>
// //                                     <th>
// //                                          <button className='btn btn-danger' >Remove</button>
// //                                     </th>               
// //                                 </tr>

// //                                 <tr >
// //                                     <td>HC Verma</td>
// //                                     <td>Doctor</td>
// //                                     <td>Male</td>
// //                                     <td>MS Ortho</td>
// //                                     <td>Delhi</td>
// //                                     <td>25-10-1965</td>
// //                                     <td>1rdsharma@gmail.com</td>
// //                                     <td>8667542367</td>
// //                                     <th>
// //                                          <button className='btn btn-danger' >Remove</button>
// //                                     </th>               
// //                                 </tr>

// //                                 <tr >
// //                                     <td>Nidhi P</td>
// //                                     <td>Receptionist</td>
// //                                     <td>Female</td>
// //                                     <td>MA</td>
// //                                     <td>Pune</td>
// //                                     <td>23-12-1995</td>
// //                                     <td>123@gmail.com</td>
// //                                     <td>7167542367</td>
// //                                     <th>
// //                                          <button className='btn btn-danger' >Remove</button>
// //                                     </th>               
// //                                 </tr>


                     
// //                   </tbody>
// //                </table>
// //               </div>
// //               </div>
// //         );
// // }

// // export default Employee;
// import React, { useState } from 'react';

// function Employee() {
//   const initialEmployees = [
//     { name: 'RK Sharma', role: 'Doctor', gender: 'Male', qualification: 'MBBS', address: 'Nashik', dob: '15-08-1985', email: '123@gmail.com', contact: '8967542367' },
//     { name: 'HC Verma', role: 'Doctor', gender: 'Male', qualification: 'MS Ortho', address: 'Delhi', dob: '25-10-1965', email: 'hc@gmail.com', contact: '8667542367' },
//     { name: 'Nidhi P', role: 'Receptionist', gender: 'Female', qualification: 'MA', address: 'Pune', dob: '23-12-1995', email: 'nidhi@gmail.com', contact: '7167542367' },
//     { name: 'HC Verma', role: 'Doctor', gender: 'Male', qualification: 'MS Ortho', address: 'Delhi', dob: '25-10-1965', email: '1rdsharma@gmail.com', contact: '8667542367' },
//     { name: 'Nidhi P', role: 'Receptionist', gender: 'Female', qualification: 'MA', address: 'Pune', dob: '23-12-1995', email: '123@gmail.com', contact: '7167542367' },
//     // Add other employees here
//   ];

//   const [employees, setEmployees] = useState(initialEmployees);

//   const handleRemove = (index) => {
//     const updatedEmployees = [...employees];
//     updatedEmployees.splice(index, 1);
//     setEmployees(updatedEmployees);
//   };

//   return (
//     <div className='container'>
//       <center><h1>Employees</h1></center>
//       <hr></hr>
//       <hr></hr>
//       <div className='table-responsive'>
//         <button className='btn btn-primary'>+ Add New Employee</button>
//         <table className='table table-bordered'>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Role</th>
//               <th>Gender</th>
//               <th>Qualification</th>
//               <th>Address</th>
//               <th>DOB</th>
//               <th>Email</th>
//               <th>Contact</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee, index) => (
//               <tr key={index}>
//                 <td>{employee.name}</td>
//                 <td>{employee.role}</td>
//                 <td>{employee.gender}</td>
//                 <td>{employee.qualification}</td>
//                 <td>{employee.address}</td>
//                 <td>{employee.dob}</td>
//                 <td>{employee.email}</td>
//                 <td>{employee.contact}</td>
//                 <td>
//                   <button className='btn btn-danger' onClick={() => handleRemove(index)}>
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Employee;


import React, { useState } from 'react';
import AddEmployee from './AddEmployee'; // Import the component for adding a new employee

function Employee() {
  const initialEmployees = [
    
            { name: 'RK Sharma', role: 'Doctor', gender: 'Male', qualification: 'MBBS', address: 'Nashik', dob: '15-08-1985', email: '123@gmail.com', contact: '8967542367' },
            { name: 'HC Verma', role: 'Doctor', gender: 'Male', qualification: 'MS Ortho', address: 'Delhi', dob: '25-10-1965', email: 'hc@gmail.com', contact: '8667542367' },
            { name: 'Nidhi P', role: 'Receptionist', gender: 'Female', qualification: 'MA', address: 'Pune', dob: '23-12-1995', email: 'nidhi@gmail.com', contact: '7167542367' },
            { name: 'HC Verma', role: 'Doctor', gender: 'Male', qualification: 'MS Ortho', address: 'Delhi', dob: '25-10-1965', email: '1rdsharma@gmail.com', contact: '8667542367' },
            { name: 'Nidhi P', role: 'Receptionist', gender: 'Female', qualification: 'MA', address: 'Pune', dob: '23-12-1995', email: '123@gmail.com', contact: '7167542367' },
            // Add other employees here
          
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  const handleRemove = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  const handleShowAddEmployee = () => {
    setShowAddEmployee(true);
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
    setShowAddEmployee(false); // Hide the "Add Employee" component after adding
  };

  return (
    <div className='container'>
      <center><h1>Employees</h1></center>
      <hr></hr>
      <button className='btn btn-primary' onClick={handleShowAddEmployee}>
          + Add New Employee
        </button>
      <hr></hr>
      <div className='table-responsive'>
        

        {showAddEmployee && (
          <AddEmployee onAddEmployee={handleAddEmployee} onCancel={() => setShowAddEmployee(false)} />
        )}

{!showAddEmployee && (
        <table className='table table-bordered'>
        <thead>
             <tr>
               <th>Name</th>
               <th>Role</th>
               <th>Gender</th>
               <th>Qualification</th>
               <th>Address</th>
               <th>DOB</th>
               <th>Email</th>
               <th>Contact</th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td>{employee.gender}</td>
                <td>{employee.qualification}</td>
                <td>{employee.address}</td>
                <td>{employee.dob}</td>
                <td>{employee.email}</td>
                <td>{employee.contact}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         )}
      </div>
    </div>
  );
}

export default Employee;
