import React from "react";
import "./Emailtype.css";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Emailtype = () => {
  return (
    <div className="emailtype">
      <div className="emailtype__options">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailtype__options">
        <PeopleIcon />
        <p>Social</p>
      </div>
      <div className="emailtype__options">
        <LocalOfferIcon />
        <p>Promotions</p>
      </div>
    </div>
  );
};

export default Emailtype;
