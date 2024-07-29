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




export default function L2Book() {


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
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <input class="inputNumberSize" type="number" value={'0.1'}/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>70009.51</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div class="d-flex justify-content-around">
              <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'5px'}}> <p style={{textAlign:'center', color:'white'}}>BIN</p></div>
              <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)'}}> <p style={{textAlign:'center', color:'white'}}>KRA</p></div>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <label for="price" class="form-label" style={{margin:'0'}}>70009.51</label> <input class="inputNumberSize" type="number" value={'0.1'} style={{marginLeft:'5px'}}/>
            </div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <input class="inputNumberSize" type="number" value={'1'}/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>70009.51</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div class="d-flex justify-content-around">
              <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'5px'}}> <p style={{textAlign:'center', color:'white'}}>CBP</p></div>
              <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)'}}> <p style={{textAlign:'center', color:'white'}}>CBP</p></div>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <label for="price" class="form-label" style={{margin:'0'}}>70009.51</label> <input class="inputNumberSize" type="number" value={'1'} style={{marginLeft:'5px'}}/>
            </div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <input class="inputNumberSize" type="number" value={'10'}/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>70009.51</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div class="d-flex justify-content-around">
              <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'5px'}}> <p style={{textAlign:'center', color:'white'}}>CBP</p></div>
              <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)'}}> <p style={{textAlign:'center', color:'white'}}>BIN</p></div>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <label for="price" class="form-label" style={{margin:'0'}}>70009.51</label> <input class="inputNumberSize" type="number" value={'10'} style={{marginLeft:'5px'}}/>
            </div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <input class="inputNumberSize" type="number" value={'20'}/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>70009.51</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div class="d-flex justify-content-around">
              <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'5px'}}> <p style={{textAlign:'center', color:'white'}}>B2C</p></div>
              <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)'}}> <p style={{textAlign:'center', color:'white'}}>B2C</p></div>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <label for="price" class="form-label" style={{margin:'0'}}>70009.51</label> <input class="inputNumberSize" type="number" value={'20'} style={{marginLeft:'5px'}}/>
            </div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <input class="inputNumberSize" type="number" value={'20'}/> <label for="price" class="form-label" style={{marginLeft:'5px'}}>70009.51</label>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div class="d-flex justify-content-around">
              <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)', marginLeft:'5px'}}> <p style={{textAlign:'center', color:'white'}}>B2C</p></div>
              <div style={{width:'38px', height:'20px', backgroundColor:'rgb(33, 32, 32)'}}> <p style={{textAlign:'center', color:'white'}}>B2C</p></div>
            </div>
            </Grid>
            <Grid item xs={4}>
            <div style={{color:'white', marginLeft:'5px', padding:'0'}}>
            <label for="price" class="form-label" style={{margin:'0'}}>70009.51</label> <input class="inputNumberSize" type="number" value={'20'} style={{marginLeft:'5px'}}/>
            </div>
            </Grid>
        </Grid>
      </div>
  );
}
