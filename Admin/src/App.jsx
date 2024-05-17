import React from "react";
import { Navbar, Sidebar } from "./components";
import { Route, Routes } from "react-router-dom";
import { AddFood } from "./Pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="flex ">
        <Sidebar />
        <Routes>
          <Route path="/" element={<AddFood />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
