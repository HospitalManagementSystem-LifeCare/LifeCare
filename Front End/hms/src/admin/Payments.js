import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';


function Payments()  {
   
    const location = useLocation();
    const { appt_id, pat_id } = location.state;

    const [services, setServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [totalCharge, setTotalCharge] = useState(0);
    const [billId, setBillId] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:7070/hospitalservice/showAll")
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error("Error fetching services:", error);
                setError(error.message);
            });
    }, []);

    useEffect(() => {
        let total = 0;
        selectedServices.forEach(serviceId => {
            const selectedService = services.find(service => service.id === serviceId);
            if (selectedService) {
                total += selectedService.charges;
            }
        });
        setTotalCharge(total);
    }, [selectedServices, services]);

    const handleCheckboxChange = (event) => {
        const serviceId = parseInt(event.target.value);
        if (event.target.checked) {
            setSelectedServices(prevSelectedServices => [...prevSelectedServices, serviceId]);
        } else {
            setSelectedServices(prevSelectedServices =>
                prevSelectedServices.filter(id => id !== serviceId)
            );
        }
    };

    const handleBillIdChange = (event) => {
        setBillId(event.target.value);
    };

    const generateBill = () => {
        const newBill = {
            p_id: pat_id,
            billDate: new Date().toISOString().split('T')[0], // Today's date
            total: totalCharge,
            services: selectedServices
        };
    
        axios.post(`http://localhost:7070/bill/add/${appt_id}`, newBill)
            .then(response => {
                // Handle success, e.g., show a success message to the user
                console.log("Bill generated successfully:", response.data);
            })
            .catch(error => {
                console.error("Error generating bill:", error);
                setError(error.message);
            });
    };
    

    return (
        <div className="container">
            <h2 className="mt-4">Payments Page</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form className="mt-4">
                <h3>Select Services:</h3>
                {services.map(service => (
                    <div key={service.id} className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={service.id}
                            onChange={handleCheckboxChange}
                            checked={selectedServices.includes(service.id)}
                        />
                        <label className="form-check-label">
                            {service.description} - ₹{service.charges}
                        </label>
                    </div>
                ))}
               
                <div className="form-group">
                    <label>Total Charge:</label>
                    <input type="text" className="form-control" value={`₹${totalCharge}`} readOnly />
                </div>
                <button type="button" className="btn btn-primary" onClick={generateBill}>Generate Bill</button>
            </form>
        </div>
    );
}

export default Payments;
