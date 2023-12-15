import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../src/styles/GatewayList.css";

const GatewayList = () => {
  const [gateways, setGateways] = useState([]);
  const [serialNumber, setserialNumber] = useState();
  const [loading, setLoading] = useState(false);
   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
   };
  useEffect(() => {
    const fetchGateways = async () => {
      try {
        const response = await axios.get('/api/gateways');
        setGateways(response.data);
      } catch (error) {
        console.error('Error fetching gateways:', error);
      }
    };

    fetchGateways();
  }, []);

  return (
   <>
       <div className="forgotpassword">
        <div className="holders">
          <form className="forgotpassword-form" action="">
            <div className="forget">
              <h2>SerialNumber</h2>
              <input
                // className="form-control p-5"
                placeholder="Enter your serial number"
                type= "string"
                value={serialNumber}
                onChange={(e) => setserialNumber(e.target.value)}
              />
              <button className="forgotpassword-send" onClick={handleSubmit}>
                {loading ? "verifying..." : "submit"}
              </button>
              </div>
          </form>    
        </div>      
      </div>




    
     <h2>Gateway List</h2>
      <ul>
        {gateways.map((gateway) => (
          <li key={gateway.serialNumber}>
            {gateway.name} - {gateway.ipv4Address}
          </li>
        ))}
      </ul>
       
    </>  
  );
};

export default GatewayList;