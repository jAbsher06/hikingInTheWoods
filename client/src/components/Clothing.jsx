import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { GearContext } from '../GearContext';
import Table from './Table.jsx';

const Clothing = (props) => {
  const [num, setNum] = useState(3);
  const [clothesFetched, setClothesFetched] = useState(false);
  const [clothes, setClothes] = useState();

  const columns = useMemo(
    () => [
      {
        Header: 'Item',
        accessor: 'Item',
      },
      {
        Header: 'Priority',
        accessor: 'Priority',
      },
      {
        Header: 'Description',
        accessor: 'Description',
      },
      {
        Header: 'Example',
        accessor: 'Example',
      },
      {
        id: 'Bringing',
        Header: 'Bringing',
        accessor: d => d.Bringing === false ? 'No' : 'Yes'
      },
      {
        id: 'Inhand',
        Header: 'In-Hand',
        accessor: d => d.Inhand === false ? 'No' : 'Yes',
      },
      {
        id: 'Packed',
        Header: 'Packed',
        accessor: d => d.Packed === false ? 'No' : 'Yes',
      }
    ], []
  )
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
        <div>
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