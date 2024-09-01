import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './PriceList.css';
import './Exchages.css';




export default function Exchages({onDeleteEvent, onClickAdd, AddButtonName}) {


    const [addCardStatus, setaddCardStatus] = React.useState(AddButtonName);

    const onClickAddCard = (event) =>{
        onClickAdd();
        console.log(AddButtonName)
    }

  return (
      <div>
        <div class="d-grid gap-2 Margintop">
            <button type="button" class="btn btn-dark btn-sm">SELECT EXCHANGES</button>
        </div>
        <div class="form-check texts">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
                BINANCE
            </label>
        </div>
        {/* <div class="form-check texts">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
            <label class="form-check-label" for="defaultCheck2">
                COINBASE
            </label>
        </div> */}
        
        <div style={{ marginTop:50, marginLeft:60}}>
        <button type="button" class="btn btn-danger btn-sm" style={{margin:'5px'}} onClick={onDeleteEvent}> Delete Card</button>
        <button type="button" class="btn btn-info btn-sm" onClick={onClickAddCard} style={{margin:'5px'} }>  {addCardStatus}</button>
        </div>
      </div>
  );
}
