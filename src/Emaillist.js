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
      <Emailbody
        name="Tarun Mandhan"
        subject="This is subject"
        message="Hello tarun you have a message Hello tarun you have a message Hello tarun you have a message Hello tarun you have a message Hello tarun you have a message"
        time="02:47 PM"
      />
    </div>
  );
};

export default Emaillist;
