import * as React from 'react';
// import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import useWebSocket from 'react-use-websocket';
import { useEffect, useRef, useState } from 'react';
import { connectWebSocket } from '../../websocket';
import PropTypes from 'prop-types';
import PriceList from './PriceList';
import './CustomCard.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import AggBook from './AggBook';
import L2Book from './L2Book';
import Exchanges from './Exchanges';
import data from './datafile.json';
//import throttle from 'lodash.throttle';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function CustomCard() {

    const [crypto, setCrypto] = React.useState('');
    const handleChange = (event) => {
        setCrypto(event.target.value);
      };
    const [state, setState] = useState("active");
    const [book, setBook] = React.useState('AggBook');
    const [items, setItems] = useState([]);


    const handleBookChange = (event) => {
      setBook(event.target.value);
      console.log(event.target.value);
      items.map((item)=> console.log(item.Symbol));
      SetAggBook(event.target.value.toString() === 'AggBook');
      SetL2Book(event.target.value.toString() === 'L2Book');
      SetExchange(event.target.value.toString() === 'Exchanges');
    };

    const[isAggBook, SetAggBook ]= useState(book.toString() === 'AggBook');
    const[isL2Book, SetL2Book ]= useState(book.toString() === 'L2Book');
    const[isExchange, SetExchange]= useState(book.toString() === 'Exchanges');

    useEffect(() => {
      setItems(data);
      console.log(items.Symbols);
    }, []);
  
    // const[isAggBook1, SetAggBook1 ]= useState(book.toString() === 'AggBook');
    // const[isL2Book1, SetL2Book1 ]= useState(book.toString() === 'L2Book');
    // const[isExchange1, SetExchange1]= useState(book.toString() === 'Exchanges');
  
    // const[isAggBook2, SetAggBook2 ]= useState(book.toString() === 'AggBook');
    // const[isL2Book2, SetL2Book2 ]= useState(book.toString() === 'L2Book');
    // const[isExchange2, SetExchange2]= useState(book.toString() === 'Exchanges');

    return (
      <div class="card cardSize" style={{fontSize: 11, background:"black",margin:'1px', padding:'1px'}}>
        <div class="card-body nopadding">
         <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} >
            <Grid item xs={3} style={{height:'40px'}}>
              <div class="form-check" style={{fontSize:'10px', color:'white',margin:'0', paddingLeft:'20px', paddingTop:'10px'}}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Fees
                </label>
              </div>
              <div class="form-check" style={{fontSize:'10px',  color:'white', margin:'0', paddingLeft:'20px'}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                <label class="form-check-label" for="flexCheckChecked">
                  Liquidity
                </label>
              </div>
            </Grid>
            <Grid item xs={6} style={{height:'40px'}}>
              <div style={{}}>
                <FormControl sx={{ m: 1, minWidth: 120, height: 20, display: 'flex', justifyContent: 'center',background:'white'}} >
                  <Select
                    value={crypto}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    style={{height:20}}
                  >
                    <MenuItem value='' sx={{minHeight:25}}> BTC USD</MenuItem>
                    <MenuItem value={20} sx={{minHeight:25}}>ETH USD</MenuItem>
                    <MenuItem value={30} sx={{minHeight:25}}>SOL USD</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={2} style={{height:'40px'}}>
              <IconButton aria-label="fingerprint" color="success" style={{padding:'10px'}}>
                <Fingerprint />
              </IconButton>
            </Grid>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={6}>
            <div style={{display:'flex', width:'128px', height:'20px',backgroundColor:'rgb(35, 35, 41)', boxSizing:'content-box !important', marginBottom:'8px' }}> <p class="text">11.09 BPS</p></div>
              <FormControl sx={{ m: 1, minWidth: 120, height: 25, display: 'flex', justifyContent: 'center', background:'white', padding:'1', margin:'0'}} size="small" >
                <Select
                  value={book}
                  onChange={handleBookChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  style={{height:25, minHeight:20}}
                >
                  <MenuItem value='AggBook' sx={{minHeight:25}}> AGG Book</MenuItem>
                  <MenuItem value='L2Book' sx={{minHeight:25}}>L2 Book</MenuItem>
                  <MenuItem value='Exchanges' sx={{minHeight:25}}>EXCHANGES</MenuItem>
                </Select>
              </FormControl>
              </Grid>
            </Grid>
          </Box>
          <div class="d-flex justify-content-around" style={{marginTop:'5px'}}>
            <div class="square"> <p class="text">70000.68</p></div>
              {/* <div class="p-1 bd-highlight"><button type="button" class="btn btn-dark">70000.68</button></div> */}
              <div class="p-1 bd-highlight"> <input min="1" max="100" type="number" id="typeNumber" class="form-control nopadding textAlignCenter" /></div>
              <div class="square"> <p class="text">70000.05</p></div>
            </div>
            {isAggBook &&(<AggBook/>)}
            {isL2Book && (<L2Book/>)}
            {isExchange &&(<Exchanges/>)}
        </div>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <button type="button" onClick={handleBookChange} value='AggBook' class="btn btn-info rounded-circle btn-lg" style={{fontSize:'8px', padding:0, marginBottom:10, marginLeft:10}}>Ag</button>
          <button type="button" onClick={handleBookChange} value='L2Book'  class="btn btn-secondary rounded-circle btn-lg" style={{fontSize:'8px', padding:0, marginBottom:10, marginLeft:10}}>L2</button>
          <button type="button" onClick={handleBookChange} value='Exchanges' class="btn btn-primary rounded-circle btn-lg" style={{fontSize:'8px', padding:0, marginBottom:10, marginLeft:10}}>Ve</button>
        </div>
      </div>
    );
}


