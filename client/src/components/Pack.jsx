import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import { GearContext } from '../GearContext';
import Table from './Table.jsx';
import useColumns from './useColumns.jsx'

const Pack = (props) => {
  const [num, setNum] = useState(3);
  const [packFetched, setPackFetched] = useState(false);
  const [pack, setPack] = useState();

  const columns = useColumns();

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

  return (
    <div>
      {packFetched ? (
        <div>
          <h2>Major Gear</h2>
          <Table data={pack} columns={columns}/>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
};

export default Pack;