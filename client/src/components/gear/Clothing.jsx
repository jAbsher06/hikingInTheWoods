import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from './Table.jsx';
import useColumns from './useColumns.jsx';

const Clothing = (props) => {
  const [num, setNum] = useState(3);
  const [clothesFetched, setClothesFetched] = useState(false);
  const [clothes, setClothes] = useState();

  const columns = useColumns();

  useEffect(() => {
    axios.get('/clothing')
      .then((res) => {
        setClothes(res.data);
        setClothesFetched(true);
        console.log(res.data);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });

  }, [num]);

  return (
    <div>
      {clothesFetched ? (
        // <div>/
          <h2>Clothing</h2>
          <Table data={clothes} columns={columns}/>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
};

export default Clothing;