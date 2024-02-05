function Patient() {
    return (  <>
     <div className='container'>
                        <center><h1>Patients</h1></center>
                        <hr></hr>
                         
                        <br></br>
                        <br></br>

                        <div className='table-responsive'>
                         <table className='table table-bordered'>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Appointment Date</th> 
                                <th>Appointment Time</th>
                                <th>Address</th>    
                                <th>Email</th>
                                <th>Contact</th>  
                                <th>View More</th>

                            </tr>
                            </thead>
                            <tbody>                               
                                             

                                          <tr >
                                              <td>Nikhil B</td>
                                              <td>M</td>
                                              <td>20-12-2023</td>
                                              <td>10:00AM</td>
                                              <td>Kolhapur</td>   
                                              <td>nb@gmail.com</td>  
                                              <td>8967453298</td>
                                              <td>
                                              <button className='btn btn-primary' >View</button>
                                                </td>            
                                          </tr>

                                          <tr >
                                              <td>Sonali K</td>
                                              <td>F</td>
                                              <td>25-12-2023</td>
                                              <td>5:00PM</td>
                                              <td>Pune</td> 
                                              <td>sonnali@gmail.com</td>                                               
                                              <td>9978654782</td>   
                                              <td>
                                              <button className='btn btn-primary' >View</button>
                                                </td>          
                                          </tr>

                                          <tr >
                                              <td>Rahul K</td>
                                              <td>M</td>
                                              <td>01-01-2024</td>
                                              <td>12:40AM</td> 
                                              <td>Surat</td>
                                              <td>rahul@gmail.com</td>                                                 
                                              <td>8275647869</td> 
                                              <td>
                                              <button className='btn btn-primary' >View</button>
                                                </td>            
                                          </tr>

                                          <tr >
                                              <td>Rohit S</td>
                                              <td>M</td>
                                              <td>25-12-2023</td>
                                              <td>5:00PM</td>
                                              <td>Mumbai</td> 
                                              <td>rsc@gmail.com</td>                                               
                                              <td>7078654765</td>  
                                              <td>
                                              <button className='btn btn-primary' >View</button>
                                                </td>           
                                          </tr>

                                        
                               

                               
                            </tbody>
                         </table>
                        </div>
                   </div> 
    </>);
}

export default Patient;