import React from "react";
import cartWidget from '../../Resources/Icons/cart.png';
import Counter from "../Counter/Counter";


function Cartwidget() {

  return (
    <li class="nav-item nav-link">
      <a href='#'>
        <div>
          <Counter></Counter>
          <img src={ cartWidget } width="30" heigh="24"/>
        </div>
        
      </a>
    </li>
  )
}



export default Cartwidget;