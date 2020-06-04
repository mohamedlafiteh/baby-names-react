import React from "react";
import "./babyNames.css";

function BabyNames(props) {
  return (
    <div className='baby-names'>
      <h1 className='words'>{props.item.name}</h1>
    </div>
  );
}

export default BabyNames;
