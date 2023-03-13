import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, Avatar } from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
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
        <div className="header__right">
          <IconButton>
            <HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon></SettingsOutlinedIcon>
          </IconButton>
          <IconButton>
            <AppsIcon></AppsIcon>
          </IconButton>

          <Avatar
            alt="Tarun"
            src="https://media.licdn.com/dms/image/C5603AQE4MyDDjgEsZw/profile-displayphoto-shrink_800_800/0/1649276317754?e=2147483647&v=beta&t=BEfnpHDQAKaQOg3sQrTTnyJmV7IygQs49K4ZUe3O2fY"
          >
            T
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default Header;
