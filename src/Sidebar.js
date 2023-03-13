import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Sidebar.css";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="compose__btn">
        Compose
      </Button>
    </div>
  );
};

export default Sidebar;
