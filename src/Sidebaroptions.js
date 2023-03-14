import React from "react";
import "./Sidebaroptions.css";

const Sidebaroptions = ({ Icon, tittle, number, isactive }) => {
  return (
    <div className={`sidebaroptions ${isactive && "sidebaroptions--active"}`}>
      <Icon />
      <h4>{tittle}</h4>
      <p>{number}</p>
    </div>
  );
};

export default Sidebaroptions;
