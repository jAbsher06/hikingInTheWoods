import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GearContext } from '../GearContext';
const ClothingWorn = (props) => {
  const [num, setNum] = useState(3);
  const [wornClothesFetched, setWornClothesFetched] = useState(false);
  const [clothesWorn, setClothesWorn] = useState();
  const [bringing, setBringing] = useState('no');
  const [inhand, setInhand] = useState('no');
  const [packed, setPacked] = useState('no');

  useEffect(() => {
    axios.get('/clothingWorn')
      .then((res) => {

        setClothesWorn(res.data);
        setWornClothesFetched(true);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });

  }, [num]);

  if (wornClothesFetched) {
    return (
      <div>
        <h2>Clothes Worn</h2>
        <div>Item Priority Description Example Inhand Packed</div>
        <div>
          {clothesWorn.map((item, index) => (
            <li>
              {item.Item} {item.Priority}  {item.Example} {inhand} {packed}
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

export default ClothingWorn;