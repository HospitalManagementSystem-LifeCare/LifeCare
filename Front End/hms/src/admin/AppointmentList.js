import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AppointmentList() {
    const [appointments, setAppointments] = useState([]);
    var navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    var fetchData = () => {
        axios.get(`http://localhost:7070/appointment/getAttended`)
            .then((response) => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.error("Error fetching appointments:", error);
            });
    }

    function goToPayments(appt_id, pat_id) {
        navigate('/admin/payments', {
            state: { appt_id, pat_id }
        });
    }

    return (
        <div className="container">
            <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>
                <div className="card-body" style={{ width: "1000px" }}>
                    <h4 className="card-title">Attended Appointments</h4>
                    <div>
                        <br />
                        <div className="table table-table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Patient Name</th>
                                        <th>Doctor Name</th>
                                        <th>Appointment Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.filter(appoi => appoi.status === 'ATTENDED_AND_BILL_GENERATED').map((appointment) => (
                                        <tr key={appointment.id}>
                                            <td>{appointment.id}</td>
                                            <td>{appointment.patientname}</td>
                                            <td>{appointment.doctorname}</td>
                                            <td>{appointment.appoint}</td>
                                            <td>{appointment.status}</td>
                                            <td>
                                                <button style={{ width: "150px" }} type='button' className='btn btn-sm btn-success' onClick={() => goToPayments(appointment.id, appointment.pid)}>Go to Payments</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentList;
