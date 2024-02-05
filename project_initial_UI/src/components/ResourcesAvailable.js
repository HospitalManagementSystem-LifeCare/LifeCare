
function Resource() {   
    return (<div className='container'>
     <center><h1>Resources</h1></center>
                        <hr></hr>
                           <div className='table-responsive'>
                             <table className='table table-bordered'>
                                <tbody>
                                <tr>
                                    <td>Resource</td>
                                    <td>
                                        <input type='text'
                                        />
                                    </td>    
                                </tr>

                                <tr>
                                    <td>Total Qty</td>
                                    <td>
                                        <input type='text'
                                        />
                                    </td>                                   
                                </tr>

                               

                                <tr>
                                    <td></td>
                                    <td>
                                        <button className='btn btn-primary'  >Add Resource</button>
                                        {" "}
                                        <button className='btn btn-info' >Reset</button>
                                        {" "}
                                        <button className='btn btn-success' >Update</button>
                                    </td>
                                </tr>

                                </tbody>
                             </table>
                           </div>
                        <hr></hr>
                        <div className='table-responsive'>
                         <table className='table table-bordered'>
                            <thead>
                            <tr>
                                <th>Resources</th>
                                <th>Total Qty.</th>
                                <th>Occupied Qty.</th> 
                                <th>Remaining Qty.</th>
                                <th>Update Resources</th>      
                            </tr>
                            </thead>
                            <tbody>                               
                                             

                                          <tr >
                                              <td>Wards</td>
                                              <td>50</td>
                                              <td>40</td>
                                              <td>10</td>
                                              <td>
                                                <button className='btn btn-warning' >Update</button>
                                              </td>              
                                          </tr>

                                          <tr >
                                              <td>Beds</td>
                                              <td>500</td>
                                              <td>300</td>
                                              <td>200</td>
                                              <td>
                                                <button className='btn btn-warning' >Update</button>
                                              </td>              
                                          </tr>

                                          <tr >
                                              <td>ICU Rooms</td>
                                              <td>10</td>
                                              <td>4</td>
                                              <td>6</td>
                                              <td>
                                                <button className='btn btn-warning' >Update</button>
                                              </td>              
                                          </tr>  

                                          <tr >
                                              <td>Oxygen Tanks</td>
                                              <td>250</td>
                                              <td>100</td>
                                              <td>150</td>
                                              <td>
                                                <button className='btn btn-warning' >Update</button>
                                              </td>              
                                          </tr>

                                          <tr >
                                              <td>Blood Bank</td>
                                              <td>600</td>
                                              <td>200</td>
                                              <td>400</td>
                                              <td>
                                                <button className='btn btn-warning' >Update</button>
                                              </td>              
                                          </tr>

                                          <tr >
                                              <td>Stretchers</td>
                                              <td>50</td>
                                              <td>30</td>
                                              <td>20</td>
                                              <td>
                                                <button className='btn btn-warning' >Update</button>
                                              </td>              
                                          </tr>  
                               

                               
                            </tbody>
                         </table>
                        </div>
                        </div>
                   
      );
}

export default Resource;