import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GearContext } from '../GearContext';
const Pack = (props) => {
  const [num, setNum] = useState(3);
  const [packFetched, setPackFetched] = useState(false);
  const [pack, setPack] = useState();
  const [bringing, setBringing] = useState('no');
  const [inhand, setInhand] = useState('no');
  const [packed, setPacked] = useState('no');

  useEffect(() => {
    axios.get('/pack')
      .then((res) => {
        setPack(res.data);
        setPackFetched(true);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });

  }, [num]);

  if (packFetched) {
    return (
      <div>
        <h2>Pack/Tent/Sleeping Gear</h2>
        <div>Item Priority Description Example</div>
        <div>
          {pack.map((item, index) => (
            <li>
              {item.Item} {item.Priority}  {item.Example} {bringing} {inhand} {packed}
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

export default Pack;