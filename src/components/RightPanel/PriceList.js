import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './PriceList.css';




export default function PriceList() {


  return (
      <table class="table table-dark table-borderless marginbottom cellSpacinenull"> 
        <thead>
          <tr>
            <th scope="col">QTY</th>
            <th scope="col">PRICE</th>
            <th scope="col">SPREAD (bps)</th>
            <th scope="col">PRICE</th>
            <th scope="col">QTY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><input class="inputNumberSize" type="number" value="0.1"/></th>
            <td>70009.51</td>
            <td>1.5</td>
            <td>70011.51</td>
            <td><input class="inputNumberSize" type="number" value="0.1"/></td>
          </tr>
          <tr>
          <th scope="row"><input class="inputNumberSize" type="number" value="1"/></th>
            <td>70006.06</td>
            <td>1.8</td>
            <td>70016.06</td>
            <td><input class="inputNumberSize" type="number" value="1"/></td>
          </tr>
          <tr>
          <th scope="row"><input class="inputNumberSize" type="number" value="10"/></th>
            <td>70001.23</td>
            <td>5.7</td>
            <td>70031.23</td>
            <td><input class="inputNumberSize" type="number" value="10"/></td>
          </tr>
          <tr>
          <th scope="row"><input class="inputNumberSize" type="number" value="20"/></th>
            <td>69980.51</td>
            <td>40.5</td>
            <td>70050.51</td>
            <td><input class="inputNumberSize" type="number" value="20"/></td>
          </tr>
          <tr>
          <th scope="row"><input class="inputNumberSize" type="number" value="100"/></th>
            <td>69780.11</td>
            <td>428.4</td>
            <td>70180.11</td>
            <td><input class="inputNumberSize" type="number" value="100"/></td>
          </tr>
        </tbody>
      </table>
  );
}
