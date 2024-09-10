import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $, { param } from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './PriceList.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PersistentDrawerRight from './SideBidDrawer';
import { useEffect, useRef, useState } from 'react';
import { spread } from 'axios';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default function AggBook({handleBlur, onChangeBidQuantity, AggBookData}) {

    const [isSideBar, SetSideBar] = useState(false);
    const [AggData, SetAggData] = useState(AggBookData);
    const [askData, SetAskData] = useState([AggBookData.Bids]);
    const [bidsData, SetBidData] = useState([AggBookData.Asks]);
    const [editValue, SetEditValue] = useState(false);
    //const [sizeBucketValue, setSizeBucketValue] = useState([1, 5, 10, 50, 100]);
    //const [paramData, SetParamData] = useState(params);
    const bidsKey = 'symbol';

    const drawsidebar=()=>{
        SetSideBar(true);
        if(isSideBar === true)
        {
          SetSideBar(false);
        }
      };

      function convert_to_float(a) {
        // Using unary plus operator
        let floatValue = +a;
    
        // Return float value
        return floatValue;
    };
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    const onChangeBidQuantityAgg = (index, event) => {
        console.log(event.target.value);
        console.log(index);
        //const newValues = [...sizeBucketValue]; // Create a copy of the array
        //newValues[index] = event.target.value; // Update the specific index
        //setSizeBucketValue(newValues);

        onChangeBidQuantity(index, event);
        AggData.Bids[index].quantity = convert_to_float(event.target.value);
        AggData.Asks[index].quantity = convert_to_float(event.target.value);
        SetBidData(AggData.Bids);
        SetAskData(AggData.Asks);
        SetEditValue(true);
        
    };

    const clickOutside = () =>{
      handleBlur();
      SetEditValue(false);
    }; 

    function fTwoDecimalPlaces(value) {
    const numbervalue = parseFloat(value)
    return isNaN(numbervalue)? '--' : numbervalue.toFixed(2);
    };

    function fOneDecimalPlaces(value) {
      const numbervalue = parseFloat(value)
      return isNaN(numbervalue)? '--' : numbervalue.toFixed(1);
      };

    function fFourDecimalPlaces(value) {
      const numbervalue = parseFloat(value)
      return isNaN(numbervalue)? '--' : numbervalue.toFixed(4);
      };

    function CalculateSpread(AskVal, BidVal){
      const askPrice =  parseFloat(AskVal.price);
      const bidPrice =  parseFloat(BidVal.price);
      const diff = askPrice - bidPrice;
      const avg = (askPrice + bidPrice)*.5;
      const SpreadValue = (diff/avg)*10000;
      //console.log(SpreadValue);

      return fFourDecimalPlaces(SpreadValue);
    };

    useEffect(() => {
       
        SetAggData(AggBookData);
        //console.log(AggData);
        if(AggData && bidsKey in AggData)
         {          
             if(!editValue)
             {
              sleep(2000);
              SetBidData(AggData.Bids);
              SetAskData(AggData.Asks);
             }
             //console.log(bidsData);
             //console.log(askData);
         }
        
       },  [AggBookData]);

  return (
      <div>
        <Grid container>
            <Grid item xs={4}>
            <button class="btn-dark" onClick={drawsidebar} style={{width:'83px', height:'30px', margin:'7px', fontSize:'15px', backgroundColor:'#2f3232', color:'white'}}>Bids</button>
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
                <label for="qty" class="form-label" style={{marginLeft:'5px'}}>QTY</label> <label for="price" class="form-label" style={{marginLeft:'15px',}}>PRICE</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', margin:'5px'}}>
                <label for="price1" class="form-label" style={{marginLeft:'10px'}}>SPREAD (bps)</label>
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
              <div style={{color:'white', marginLeft:'5px', padding:'0', fontSize:'10px'}}>
                <input key={index} class="inputNumberSize" type="number" onBlur={clickOutside} onChange={(event) => onChangeBidQuantityAgg(index, event)} value={fTwoDecimalPlaces(bid.quantity)}/> <label for="price" class="form-label" style={{marginLeft:'5px', width:'40px'}}>{fOneDecimalPlaces(bid.price)}</label>
              </div>
            ))}
            {/* <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <input class="inputNumberSize" type="number"/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>70009.51</label>
            </div> */}
            </Grid>
            <Grid item xs={4}>
            {bidsData.map((bid, index) => (
              <div style={{color:'white', }}>
              <div style={{width:'80px', margin:'4px', padding:'1px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'7px'}}> <p style={{textAlign:'center'}}>{CalculateSpread(askData[index],bid)}</p></div>
              </div>
            ))}
            </Grid>
            <Grid item xs={4}>
                {askData.map((ask, index) => (
                     <div style={{color:'white', marginLeft:'5px', padding:'0', fontSize:'10px'}}>
                     <label style={{width:'40px'}} for="price" class="form-label">{fOneDecimalPlaces(ask.price)}</label> <input key={index} class="inputNumberSize" type="number" onBlur={clickOutside} onChange={(event) => onChangeBidQuantityAgg(index, event)} style={{marginLeft:'8px'}} value={fTwoDecimalPlaces(ask.quantity)}/>
                     </div>
                ))}
           
            </Grid>
        </Grid>
        {isSideBar &&(<PersistentDrawerRight prop={true}/>)}
      </div>
  );
}
