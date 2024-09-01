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

  

  const [{items}, setItems] = useState({ items: [] });
  const [wsCard, setCardWs] = useState(1);
  const [marketCardData, setCardMD] = useState([]);
  const [cardResp, setCardData] = useState([]);
  const [cards, setCards] = useState([]);
  const [newCardName, setNewCardName] = useState('');
  const [securitesData, setSecuritiesData] = useState([]);

  const addItem = () => {
    // items.push( <CustomCard/>);
    // setItems({ items: [...items] });
      const newCard = {
        id: Date.now(), // Unique id based on timestamp
      };
      setCards([...cards, newCard]);
  };

  const handleDeleteCard = (id) => {
     console.log(id);
    //  if(items.length > 0)
    //  {
    //   //items.filter(item => item.id !== id);
    //  }
    //  setItems({items})
    setCards(cards.filter(card => card.id !== id));
  };

  const type = "subscribe";
  const ts = "time";
  // const streams = [
  //   {
  //     "Symbol": "BTCUSDT",
  //     "name": "OrderBook"
  //   }, 
  //   {
  //     "Symbol": "ETHUSD",
  //     "name": "OrderBook"
  //   }
  // ]

//   useEffect(() => {
//     let params = {
//       "reqid": 1234567890,
//       "type": "subscribe",
//       "ts": "2023-02-20T14:30:00.000Z",
//       "streams": [
//           {
//               "name": "OrderBook",
//               "Symbol": "BTC-USD",
//               "Venues": [
//                   "binance",
//                   "kraken"
//               ],
//               "Depth": 5
  
//           }
//       ]
//   };
      
//     const websocket = connectWebSocket(url, params, setCardData, wsCard);
//     setCardWs(websocket);

//     // let temp = [];
//     // for (let i=0; i<cardResp.length; i++){
//     //     temp.push({'symbol':cardResp[i]['s'], 'volume':parseFloat(cardResp[i]['v']), 'change':(Math.round(cardResp[i]['P']*10)/10).toString()+'%'});
//     //   }
//     // let i=0, j=0;
//     // for (i=0; i<marketCardData.length; i++){
//     //   for (j=0; j<temp.length; j++){
//     //     if (marketCardData[i]['symbol'] == temp[j]['symbol']){
//     //       break;
//     //     }
//     //   }
//     //   if(j== temp.length){
//     //     temp.push(marketCardData[i]);
//     //   }  
//     // }

   //const axios = require('axios');

   useEffect(() => {
    axios.get('http://localhost:8080/v1/securities', {
      headers: {
        
      }
    })
    .then(response => setSecuritiesData(response.data))
    .catch(error => console.error('Error:', error));
  },  []);

//     // axios.get('https://scorpion-solid-precisely.ngrok-free.app/v1/securities',{
//     //    headers: new Headers({
//     //     "ngrok-skip-browser-warning": "69420",
//     //   }),
//     // })
//     // .then(response => console.log(response.data))
//     // .catch(error => console.error('Error:', error));
//     //const axios = require('axios');
//     // axios.get('https://scorpion-solid-precisely.ngrok-free.app/v1/securities',{
//     //   headers:{
//     //     'ngrok-skip-browser-warning': '69420',
//     //     //'Accept':'application/json',
//     //     'Access-Control-Allow-Origin': '*',
//     //   }
//     // })
//     // .then(response => {
//     //   if(response.headers['content-type'].includes('application/json')){
//     //     console.log(response.data);
//     //   }else{
//     //     console.error('Expected Json response', response.data);
//     //   }
//     // })
//     // .catch(error =>{
//     //   console.log('Error:', error);
//     // })

//     // axios.get('http://ec2-54-206-236-27.ap-southeast-2.compute.amazonaws.com/',{
//     //   headers:{
//     //          //'Accept':'*/*',
//     //          //'Access-Control-Allow-Origin': '*',
//     //          //'Accept-Encoding': 'gzip, deflate, br',
//     //          //'Connection': 'keep-alive',
//     //        }
//     // })
//     // .then(function (response) {
//     //   console.log(response.data);
//     // })
//     // .catch(function (error) {
//     //   console.log(error);
//     // });
//     //console.log(cardResp.data);
//     //console.log(cardResp.data.Bids);
//     setCardMD(websocket);
//     //marketCardData.map((item)=> console.log(item.data));
//     //console.log(websocket);
//     //console.log(websocket.data);
//     //console.log(params);
// }, [cardResp, wsCard]);

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
