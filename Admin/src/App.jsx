import { Navbar, Sidebar } from "./components";
import { Route, Routes } from "react-router-dom";
import { AddFood, FoodDetails, FoodList, Orders, UpdateFood } from "./Pages";

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
          <Route path="/details/:id" element={<FoodDetails />} />
          <Route path="/update/:id" element={<UpdateFood />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
