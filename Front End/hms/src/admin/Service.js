import React, { useEffect, useState } from "react";
import axios from "axios";
import fetchData from "../services/home";



function Service()  {
   

    const [services, setServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [totalCharge, setTotalCharge] = useState(0);
    const [billId, setBillId] = useState("");
    const [error, setError] = useState(null);

    
    const fetchData =()=>{
        axios.get("http://localhost:7070/hospitalservice/showAll")
        .then(response => {
            setServices(response.data);
            })
            .catch(error => {
                console.error("Error fetching services:", error);
                setError(error.message);
            });
        }
        
        useEffect(fetchData,[]);
        
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


    const addService = () => {
        // Get the service description and charge from the input fields
        const description = document.getElementById('serviceDescription').value;
        const charge = document.getElementById('serviceCharge').value;
    
        // Create an object with the service data
        const newService = {
            description: description,
            charges: parseInt(charge) // Parse charge as float
        };
    
        // Send the new service data to the backend
        axios.post("http://localhost:7070/hospitalservice/add", newService)
            .then(response => {
                // Handle success, maybe show a success message or update state
                console.log("Service added successfully:", response.data);
               

                document.getElementById('serviceDescription').value="";
        document.getElementById('serviceCharge').value="";
        
        fetchData();
    })
    .catch(error => {
        // Handle error, maybe show an error message
        console.error("Error adding service:", error);
        document.getElementById('serviceDescription').value="";
    document.getElementById('serviceCharge').value="";
            fetchData();
            });
    };
    
    
    
       
    

    return (
        <div className="container">
            <h2 className="mt-4">Services Page</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form className="mt-4">
                
                {services.map(service => (
                    <div key={service.id} className="form-check">
                        
                        <label className="form-check-label">
                            {service.description} - ₹{service.charges}
                        </label>
                    </div>
                ))}
               
                <div className="form-group">
                <label>Service Description:</label>
                    <input id="serviceDescription" type="text" className="form-control"  />
                    <label>Service Charge:</label>
                    <input id="serviceCharge" type="text" className="form-control"   />
                </div>
                <button type="button" className="btn btn-primary" onClick={addService}>Add new Service</button>
            </form>
        </div>
    );
                }
export default Service;
