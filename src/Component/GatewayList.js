import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GatewayList = () => {
  const [gateways, setGateways] = useState([]);

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
    <div>
      <h2>Gateway List</h2>
      <ul>
        {gateways.map((gateway) => (
          <li key={gateway.serialNumber}>
            {gateway.name} - {gateway.ipv4Address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatewayList;