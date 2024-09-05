import * as React from 'react';
//import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $, { event } from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import useWebSocket from 'react-use-websocket';
import { useEffect, useRef, useState } from 'react';
import { connectWebSocket } from '../../websocket';
import PropTypes from 'prop-types';
import './OrderBook.css';
import CustomCard from './CustomCard';
import axios from 'axios'; 
import TopBar from './TopBar';




function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1/2,
        m: 1/2,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.6rem',
        fontWeight: '800',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function TopRightPanel() {

  let url = 'ws://localhost:8080/stream';

  

  // const [{items}, setItems] = useState({ items: [] });
  // const [wsCard, setCardWs] = useState(1);
  // const [marketCardData, setCardMD] = useState([]);
  // const [cardResp, setCardData] = useState([]);
  const [cards, setCards] = useState([]);
  //const [newCardName, setNewCardName] = useState('');
  const [securitesData, setSecuritiesData] = useState([]);

  const addItem = () => {
      const newCard = {
        id: Date.now(), // Unique id based on timestamp
      };
      setCards([...cards, newCard]);
  };

  const handleDeleteCard = (id) => {
     console.log(id);
    setCards(cards.filter(card => card.id !== id));
  };

   useEffect(() => {
    axios.get('http://localhost:8080/v1/securities', {
      headers: {
        
      }
    })
    .then(response => setSecuritiesData(response.data))
    .catch(error => console.error('Error:', error));
  },  []);


  return (
    <div>
      <TopBar addCard = {addItem}></TopBar>
      {/* <button type="button" class="btn btn-info btn-sm" onClick={addItem} style={{margin:'5px'}}> Add</button> */}
      <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
      {/* {items} */}
      {cards.map(card => (
          <CustomCard key={card.id} card={card} onDelete={() => handleDeleteCard(card.id)} SecuritiesData = {securitesData}/>
        ))}
      </div>
    </div>
  );
}
