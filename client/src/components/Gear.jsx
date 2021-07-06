import React, { useState } from 'react';
import ClothingWorn from './ClothingWorn.jsx';
import Clothing from './Clothing.jsx';
import Pack from './Pack.jsx';
import Utilities from './Utilities.jsx';
import Kitchen from './Kitchen.jsx'


const Gear = (props) => {

  return (
    <div>
      <h2>Gear</h2>
      <ul class="gear">
        <li>
          {/* <ClothingWorn /> */}
          <Clothing />
          <Pack />
          <Kitchen />
          <Utilities />
        </li>
      </ul>
    </div>
  );
};

export default Gear;