import React from "react";
import "./Emaillist.css";
import EmailListSetting from "./EmailListSetting";
import Emailtype from "./Emailtype";
import Emailbody from "./Emailbody";

const Emaillist = () => {
  return (
    <div className="emaillist">
      <EmailListSetting />
      <Emailtype />
      <Emailbody />
    </div>
  );
};

export default Emaillist;
