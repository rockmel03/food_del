import React from "react";
import { Navbar, Sidebar } from "./components";
import { Route, Routes } from "react-router-dom";
import { AddFood, FoodList, Orders } from "./Pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="flex ">
        <Sidebar />
        <Routes>
          <Route path="/" element={<AddFood />} />
          <Route path="/list" element={<FoodList />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
