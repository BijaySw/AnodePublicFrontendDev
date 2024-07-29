import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default function AggBook() {

    const [isSideBar, SetSideBar] = useState(false);

    const drawsidebar=()=>{
        SetSideBar(true);
        if(isSideBar === true)
        {
          SetSideBar(false);
        }
      };

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
                <label for="qty" class="form-label" style={{marginLeft:'5px'}}>QTY</label> <label for="price" class="form-label" style={{marginLeft:'15px'}}>PRICE</label>
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
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <input class="inputNumberSize" type="number"/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>70009.51</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white'}}>
            <div style={{width:'80px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'7px'}}> <p style={{textAlign:'center'}}>1.5</p></div>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <label for="price" class="form-label" style={{margin:'0'}}>70009.51</label> <input class="inputNumberSize" type="number" style={{marginLeft:'5px'}}/>
            </div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <input class="inputNumberSize" type="number"/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>70009.51</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white'}}>
            <div style={{width:'80px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'7px'}}> <p style={{textAlign:'center'}}>1.5</p></div>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <label for="price" class="form-label" style={{margin:'0'}}>70009.51</label> <input class="inputNumberSize" type="number" style={{marginLeft:'5px'}}/>
            </div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <input class="inputNumberSize" type="number"/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>70009.51</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white'}}>
            <div style={{width:'80px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'7px'}}> <p style={{textAlign:'center'}}>1.5</p></div>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <label for="price" class="form-label" style={{margin:'0'}}>70009.51</label> <input class="inputNumberSize" type="number" style={{marginLeft:'5px'}}/>
            </div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <input class="inputNumberSize" type="number"/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>70009.51</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white'}}>
            <div style={{width:'80px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'7px'}}> <p style={{textAlign:'center'}}>1.5</p></div>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <label for="price" class="form-label" style={{margin:'0'}}>70009.51</label> <input class="inputNumberSize" type="number" style={{marginLeft:'5px'}}/>
            </div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <input class="inputNumberSize" type="number"/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>70009.51</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white'}}>
            <div style={{width:'80px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'7px'}}> <p style={{textAlign:'center'}}>1.5</p></div>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <label for="price" class="form-label" style={{margin:'0'}}>70009.51</label> <input class="inputNumberSize" type="number" style={{marginLeft:'5px'}}/>
            </div>
            </Grid>
        </Grid>
        {isSideBar &&(<PersistentDrawerRight prop={true}/>)}
      </div>
  );
}
