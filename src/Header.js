import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@material-ui/core";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <IconButton>
            <ReorderIcon></ReorderIcon>
          </IconButton>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="logo"
            width="100"
            height="40"
          />
        </div>
        <div className="header__middle">
          <div className="search_mail">
            <IconButton>
              <SearchIcon></SearchIcon>
            </IconButton>
            <input type="text" placeholder="Search mail" />
            <IconButton>
              <ExpandMoreIcon></ExpandMoreIcon>
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
