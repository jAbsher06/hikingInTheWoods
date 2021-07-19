import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GearContext } from '../GearContext';
import Table from './Table.jsx'
import useColumns from './useColumns.jsx'

const Kitchen = (props) => {
  const [num, setNum] = useState(3);
  const [kitchenFetched, setKitchenFetched] = useState(false);
  const [kitchen, setKitchen] = useState();
  const columns = useColumns();

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

  return (
    <div>
      {kitchenFetched ? (
        <div>
          <h2>Kitchen</h2>
          <Table data={kitchen} columns={columns}/>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
};

export default Kitchen;