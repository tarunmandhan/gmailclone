import React from "react";
import "./Sidebaroptions.css";

const Sidebaroptions = ({ Icon, tittle, number }) => {
  return (
    <div className="sidebaroptions">
      <Icon />
      <h4>{tittle}</h4>
      <p>{number}</p>
    </div>
  );
};

export default Sidebaroptions;
