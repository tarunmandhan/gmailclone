import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Sidebar.css";
import { Button } from "@mui/material";
import Sidebaroptions from "./Sidebaroptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="compose__btn">
        Compose
      </Button>
      <Sidebaroptions
        Icon={InboxIcon}
        tittle="Inbox"
        number="225"
        isactive={true}
      />
      <Sidebaroptions Icon={StarRateIcon} tittle="Starred" number="500" />
      <Sidebaroptions Icon={WatchLaterIcon} tittle="Snoozed" number="295" />
      <Sidebaroptions
        Icon={LabelImportantIcon}
        tittle="Important"
        number="152"
      />
      <Sidebaroptions Icon={SendIcon} tittle="Sents" number="254" />
      <Sidebaroptions Icon={DraftsIcon} tittle="Drafts" number="24" />
      <Sidebaroptions Icon={LabelIcon} tittle="Category" number="125" />
      <Sidebaroptions Icon={DeleteIcon} tittle="[Map]/Trash" number="325" />
      <Sidebaroptions Icon={FindInPageIcon} tittle="Documents" number="254" />
      <Sidebaroptions Icon={ExpandMoreIcon} tittle="More" />
      <hr />
      <h3 className="sidebaroptions__heading">Meet</h3>
      <Sidebaroptions Icon={VideocamIcon} tittle="New meeting" />
      <Sidebaroptions Icon={KeyboardIcon} tittle="Join a meeting" />
    </div>
  );
};

export default Sidebar;
