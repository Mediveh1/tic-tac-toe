import React, { useState } from "react";

const Square = ({ value, onSqaureClick }) => {
  return (
    <button className="square" onClick={onSqaureClick}>
      {value}
    </button>
  );
};
export default Square;
