import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { GearContext } from '../GearContext';

const Clothing = (props) => {
  const [num, setNum] = useState(3);
  const [clothesFetched, setClothesFetched] = useState(false);
  const [clothes, setClothes] = useState();
  const [bringing, setBringing] = useState('no');
  const [inhand, setInhand] = useState('no');
  const [packed, setPacked] = useState('no');

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

  if (clothesFetched) {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={[
            clothes.map((piece, index) => (
              {item: piece.Item, priority: piece.priority, description: piece.description, example: piece.example, bringing: piece.bringing, inHand: piece.inHand, packed: piece.packed}
            ))
          ]}
          columns={[
            {
              field: 'item',
              headerName: 'Item',
              width: 150,
              editable: true,
            },
            {
              field: 'priority',
              headerName: 'Priority',
              width: 150,
              editable: true,
            },
            {
              field: 'description',
              headerName: 'Description',
              width: 150,
              editable: true,
            },
            {
              field: 'item',
              headerName: 'Item',
              width: 150,
              editable: true,
            },
            {
              field: 'example',
              headerName: 'Example',
              width: 150,
              editable: true,
            },
            {
              field: 'bringing',
              headerName: 'Bringing',
              type: 'boolean',
              width: 150,
              editable: true,
            },
            {
              field: 'inHand',
              headerName: 'In-Hand',
              type: 'boolean',
              width: 150,
              editable: true,
            },
            {
              field: 'packed',
              headerName: 'Packed',
              width: 150,
              editable: true,
            },
          ]}
          getRowId={() => Math.random()}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />
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