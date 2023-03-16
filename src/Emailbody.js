import React from "react";
import "./Emailbody.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";

const Emailbody = () => {
  return (
    <div className="emailbody">
      <div className="emailbody__left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelOutlinedIcon />
        <h4>Tarun Mandhan</h4>
      </div>
      <div className="emailbody__middle">
        <div className="emailbody__middle__msg">
          <p>
            <b>Subject</b> This is massage body
          </p>
        </div>
      </div>
      <div className="emailbody__right">
        <p>7:25 PM</p>
      </div>
    </div>
  );
};

export default Emailbody;
