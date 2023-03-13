import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <ReorderIcon></ReorderIcon>
        </div>
      </div>
    </>
  );
};

export default Header;
