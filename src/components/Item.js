import React, { useState } from "react";

function Item({ name, category }) {
  const [mode, setMode] = useState(false)
  console.log(mode)

  return (
    <li className={ mode ? className="in-cart" : className=""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"  onClick={ () => setMode( (mode) =>  !mode )} >{ mode ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
