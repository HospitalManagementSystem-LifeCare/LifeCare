// import AppointmentsRow from './components/AppointmentsRow';
import { toast } from 'react-toastify'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function PatientBill(){
    var [bills, setBills] = useState([]);
    var navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [])

    var fetchData = () => {
        console.log(1);
        axios.get(`http://localhost:7070/bill/bills/${sessionStorage.getItem("id")}`).then((response) => {
            console.log(response)
            setBills(response.data);
        })
    }
    var nothing =(id)=>{
        axios.post(`http://localhost:7070/bill/paid/${id}`).then((response)=>{
            console.log(response)
            fetchData();
        })
    }
    return (<div>
        <center><h1>Your Bills</h1> </center>
       <div className="container">
        <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>

            <div className="card-body"style={{width: "1500px"}}>
                <h4 className="card-title">
                    Bills
                </h4>
                <div>
                    <br></br>
                    {console.log(bills)}
                    <div className="table table-table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    
                                    <td>
                                        Id
                                    </td>
                                    <td>
                                        Bill_Date
                                    </td>
                                    <td>
                                        Status
                                    </td>
                                    <td>
                                        Total
                                    </td>
                                    <td>
                                        Patient Name
                                    </td>
                                    <td>
                                        Action
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bills.map((bill) => {
                                        return <tr key={bill.id}>
                                            <td>
                                                {bill.id}
                                            </td>
                                            <td>
                                                {bill.generatedDate}
                                            </td>

                                            <td>
                                                {bill.status}
                                            </td>
                                            <td>
                                                {bill.total}
                                            </td>
                                            <td>
                                                {bill.patientname}
                                            </td>
                                            <td>
                                            {
                                                    bill.status=="unpaid"?<input type={"button"} value={"pay"} className='btn btn-success' onClick={()=>{
                                                        nothing(bill.id)
                                                    }}></input> :"-"
                                                }
                                            </td>
                                            
                                        </tr>


                                    })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
        </div>

     </div>)
}

export default PatientBill;