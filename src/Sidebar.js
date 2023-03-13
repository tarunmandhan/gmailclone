import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Sidebar.css";
import { Button } from "@mui/material";
import Sidebaroptions from "./Sidebaroptions";
import InboxIcon from "@mui/icons-material/Inbox";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="compose__btn">
        Compose
      </Button>
      <Sidebaroptions Icon={InboxIcon} tittle="Inbox" number="225" />
    </div>
  );
};

export default Sidebar;
