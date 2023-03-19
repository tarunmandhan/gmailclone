import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Emaillist from "./Emaillist";
import Compose from "./Compose";

const App = () => {
  const isMessageOpen = true;
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
