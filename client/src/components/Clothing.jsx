import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { GearContext } from '../GearContext';
const Clothing = (props) => {
  const [num, setNum] = useState(3);
  const [clothesFetched, setClothesFecthed] = useState(false);
  const [clothes, setClothes] = useState();
  const [bringing, setBringing] = useState('no');
  const [inhand, setInhand] = useState('no');
  const [packed, setPacked] = useState('no');

  function createData (Item, Priority, Description, Example, Bringing, Inhand, Packed) {
    return {Item, Priority, Description, Example, Bringing, Inhand, Packed};
  }

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