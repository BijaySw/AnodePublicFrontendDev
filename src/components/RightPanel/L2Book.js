import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './L2Book.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useRef, useState } from 'react';
import { connectWebSocket } from '../../websocket';




export default function L2Book({L2BookData}) {

  const [l2Data, SetL2Data] = useState(L2BookData);
  const [askData, SetAskData] = useState([]);
  const [bidsData, SetBidData] = useState([]);
  const bidsKey = 'Bids';
  let url = 'ws://localhost:8080/stream';

  function fTwoDecimalPlaces(value) {
    const numbervalue = parseFloat(value)
    return isNaN(numbervalue)? '0.00' : numbervalue.toFixed(2);
  }

//   let L2BookParams = {
//     "reqid": 1234567890,
//     "type": "subscribe",
//     "ts": "2023-02-20T14:30:00.000Z",
//     "streams": [
//         {
//             "name": "OrderBook",
//             "Symbol": "BTC-USD",
//             "Venues": [
//                 "binance",
//                 "kraken"
//             ],
//             "Depth": 5

//         }
//     ]
// }
  

  useEffect(() => {
    SetL2Data(L2BookData)
    console.log(l2Data);
    if(l2Data)
     {          
         SetBidData(l2Data.Bids);
         SetAskData(l2Data.Asks);
     }
    
   },  [L2BookData]);


  return (
      <div>
        <Grid container>
            <Grid item xs={4}>
            <button class="btn-dark" style={{width:'83px', height:'30px', margin:'7px', fontSize:'15px', backgroundColor:'#2f3232', color:'white'}}>Bids</button>
            </Grid>
            <Grid item xs={4}>
            <button class="btn-dark" style={{width:'83px', height:'30px', margin:'7px', fontSize:'15px', backgroundColor:'#2f3232', color:'white'}}>RFQ</button>
            </Grid>
            <Grid item xs={4}>
            <button class="btn-dark" style={{width:'83px', height:'30px', margin:'7px', fontSize:'15px', backgroundColor:'#2f3232', color:'white'}}>Asks</button>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
            <div style={{color:'white', margin:'5px'}}>
                <label for="qty" class="form-label" style={{marginLeft:'5px'}}>QTY</label> <label for="price" class="form-label" style={{marginLeft:'15px'}}>PRICE</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', margin:'5px'}}>
                <label for="price1" class="form-label" style={{marginLeft:'20px'}}>VENUES</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', margin:'5px'}}>
                <label for="price1" class="form-label" style={{marginLeft:'10px'}}>PRICE</label> <label for="qty1" class="form-label" style={{marginLeft:'10px'}}>QTY</label>
            </div>
            </Grid>
        </Grid>
        <Grid container>
        <Grid item xs={4}>             
          {bidsData.map((bid, index) => (
              <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
                <input key={index} class="inputNumberSize" type="number" value={fTwoDecimalPlaces(bid.quantity)}/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>{fTwoDecimalPlaces(bid.price)}</label>
              </div>
          ))}
            
          </Grid>
          <Grid item xs={4}>
          <div class="d-flex justify-content-around">
            <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'5px'}}> <p style={{textAlign:'center', color:'white'}}>BIN</p></div>
            <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)'}}> <p style={{textAlign:'center', color:'white'}}>KRA</p></div>
          </div>
          </Grid>
          <Grid item xs={4}>

            {askData.map((ask, index) => (
              <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
              <label key={index} for="price" class="form-label">{fTwoDecimalPlaces(ask.price)}</label> <input class="inputNumberSize" type="number" value={fTwoDecimalPlaces(ask.quantity)} style={{marginLeft:'5px'}}/>
              </div>
            ))}
          </Grid>
        </Grid>
      </div>
  );
}
