import React from 'react';
import GatewayList from '../src/Component/GatewayList';
import PeripheralDeviceList from '../src/Component/PeripheralDeviceList';
function App() {
  return (
    <div className="App">
      <GatewayList />
      <PeripheralDeviceList serialNumber="your-gateway-serial-number" />
    </div>
  );
}

export default App;
