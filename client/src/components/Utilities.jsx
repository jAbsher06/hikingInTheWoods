import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GearContext } from '../GearContext';
const Utilities = (props) => {
  const [num, setNum] = useState(3);
  const [utilitiesFetched, setUtilitiesFetched] = useState(false);
  const [utilities, setUtilities] = useState();
  const [bringing, setBringing] = useState('no');
  const [inhand, setInhand] = useState('no');
  const [packed, setPacked] = useState('no');

  useEffect(() => {
    axios.get('/utilities')
      .then((res) => {
        setUtilities(res.data);
        setUtilitiesFetched(true);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });

  }, [num]);

  if (utilitiesFetched) {
    return (
      <div>
        <h2>Navigation/Utilities/Personal/Tools</h2>
        <div>Item Priority Description Example</div>
        <div>
          {utilities.map((item, index) => (
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

export default Utilities;