import React from "react";
import "./Emaillist.css";
import EmailListSetting from "./EmailListSetting";
import Emailtype from "./Emailtype";

const Emaillist = () => {
  return (
    <div className="emaillist">
      <EmailListSetting />
      <Emailtype />
    </div>
  );
};

export default Emaillist;
