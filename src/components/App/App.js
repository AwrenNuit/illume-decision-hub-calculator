import React from 'react';
import './App.css';
import BreakEven from '../Calculators/BreakEven/BreakEven';
import PriceSetting from '../Calculators/PriceSetting/PriceSetting';
import ProfitLever from '../Calculators/ProfitLever/ProfitLever';
import Login from '../Login/Login';
import Stepper from '../Stepper/Stepper';

function App() {
  return (
    <div className="App">
      <Login />
      <BreakEven/>
      <PriceSetting/>
      <ProfitLever />
      <Stepper />
    </div>
  );
}

export default App;
