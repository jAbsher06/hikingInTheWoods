import React, { useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Gear from './gear/Gear.jsx';
import Logistics from './Logistics.jsx';
import Weather from './Weather.jsx';


const App = (props) => {
  const [listFetched, setListFetched] = useState(false);

  return (
    <Container maxWidth="lg" >
      <div>
        <Weather />
        <Logistics />
        <Gear />
      </div>
    </Container>
  );
};

export default App;