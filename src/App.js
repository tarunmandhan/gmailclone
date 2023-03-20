import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Emaillist from "./Emaillist";
import Compose from "./Compose";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

const App = () => {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  console.log(isMessageOpen);
  return (
    <>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Emaillist />
        </div>
        {isMessageOpen && <Compose />}
      </div>
    </>
  );
};

export default App;
