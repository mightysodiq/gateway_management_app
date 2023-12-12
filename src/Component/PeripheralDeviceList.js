import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PeripheralDeviceList = ({ serialNumber }) => {
  const [devices, setDevices] = useState([]);
  const [name, setName] = useState("");
  const [ipV4Address, setIpV4Address] = useState("");

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get(`/api/gateways/{serialNumber}`,
        {
         name,
         ipV4Address,
        }
        );
        setDevices(response.data.peripheralDevices);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    };

    fetchDevices();
  }, [serialNumber]);

  return (
    <div>
      <h2>Peripheral Devices for Gateway {serialNumber}</h2>
      <ul>
        {devices.map((device) => (
          <li key={device.uid}>
            {device.vendor} - {device.dateCreated} - Status: {device.status ? 'Online' : 'Offline'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeripheralDeviceList;