import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GearContext } from '../GearContext';
const Clothing = (props) => {
  const [num, setNum] = useState(3);
  const [clothesFetched, setClothesFecthed] = useState(false);
  const [clothes, setClothes] = useState();
  const [bringing, setBringing] = useState('no');
  const [inhand, setInhand] = useState('no');
  const [packed, setPacked] = useState('no');

  const handleInhandClick = (e) => {
    setInhand('yes');
  }

  useEffect(() => {
    axios.get('/clothing')
      .then((res) => {
        setClothes(res.data);
        setClothesFecthed(true);
        console.log(res.data);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });

  }, [num]);

  if (clothesFetched) {
    return (
      <div>
        <h2>Clothes</h2>
        <div>Item Priority Description Example bringing Inhand Packed</div>
        <div>
          {clothes.map((item, index) => (
            <li onClick={() => {handleInhandClick()}}>
              {item.Item} {item.Priority} {item.Example} {bringing} {inhand} {packed}
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

export default Clothing;