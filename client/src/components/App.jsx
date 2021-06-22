import React, { useState } from 'react';
import axios from 'axios';
import Gear from './Gear.jsx';
import Logistics from './Logistics.jsx';
import Weather from './Weather.jsx';

const App = (props) => {
  const [listFetched, setListFetched] = useState(false);

  return (
    <div>
      <Weather />
      <Logistics />
      <Gear />
    </div>
  );
};

export default App;