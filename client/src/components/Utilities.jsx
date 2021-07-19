import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import { GearContext } from '../GearContext';
import Table from './Table.jsx'
import useColumns from './useColumns.jsx'

const Utilities = (props) => {
  const [num, setNum] = useState(3);
  const [utilitiesFetched, setUtilitiesFetched] = useState(false);
  const [utilities, setUtilities] = useState();
  const columns = useColumns();

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

  return (
    <div>
      {utilitiesFetched ? (
        <div>
          <h2>Utilities/Tools</h2>
          <Table data={utilities} columns={columns}/>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
};

export default Utilities;