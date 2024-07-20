import "./App.css";
import "../src/components/Navigationbar/navigation";
import "../src/views/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menubar from "../src/components/Navigationbar/navigation";
import "../src/components/User/tabComponent";
import React from "react";
import User from "./views/user";

import Dashboard from "../src/views/Dashboard";

const App = () => {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Menubar>
          <Routes>
            <Route path="/" element=<Dashboard/> />
            <Route path="/" />
            <Route path="/user" element=<User /> />
            <Route path="/comment" />
          </Routes>
        </Menubar>
      </BrowserRouter>
    </div>
  );
};

export default App;
