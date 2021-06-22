import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GearContext } from '../GearContext';
const Kitchen = (props) => {
  const [num, setNum] = useState(3);
  const [kitchenFetched, setKitchenFetched] = useState(false);
  const [kitchen, setKitchen] = useState();
  const [quantity, setQuantity] = useState(0);
  const [bringing, setBringing] = useState('no');
  const [inhand, setInhand] = useState('no');
  const [packed, setPacked] = useState('no');

  useEffect(() => {
    axios.get('/kitchen')
      .then((res) => {
        setKitchen(res.data);
        setKitchenFetched(true);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });

  }, [num]);

  if (kitchen) {
    return (
      <div>
        <h2>Kitchen & Hydration</h2>
        <div>Item Priority Description Example</div>
        <div>
          {kitchen.map((item, index) => (
            <li>
              {item.Item} {item.Priority}  {item.Example} {bringing} {inhand} {packed} {quantity}
            </li>

          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Kitchen;