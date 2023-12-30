import React from "react";

function ItemListContainer(props) {
  
  const { items } = props;


  return (
    <div>
      <ul>
        {items.map((item) => <li class="text-start" onClick={() => props.onItemSeleccionado(item)}>{ item }</li>)}
      </ul>
    </div>
  )
}






export default ItemListContainer;