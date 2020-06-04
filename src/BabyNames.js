import React from "react";
import "./babyNames.css";

function BabyNames(props) {
  const getStyle = () => {
    return {
      color: props.item.sex === "m" ? "blue" : "red",
    };
  };

  return (
    <tr>
      <td>{props.item.id}</td>
      <td className={getStyle()}>{props.item.name}</td>
      <td>
        <button style={{ backgroundColor: "grey" }}>Add</button>
      </td>
    </tr>
  );
}

export default BabyNames;
