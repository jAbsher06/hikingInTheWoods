import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import Table from './Table.jsx';
import useColumns from './useColumns.jsx';

const ClothingWorn = (props) => {
  const [num, setNum] = useState(3);
  const [wornClothesFetched, setWornClothesFetched] = useState(false);
  const [clothesWorn, setClothesWorn] = useState();
  const columns = useColumns();

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



  return (
    <div>
      {wornClothesFetched ? (
        <div>
          <h2>Clothing Worn</h2>
          <Table data={clothesWorn} columns={columns}/>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
};

export default ClothingWorn;