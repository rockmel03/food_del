import { Route, Routes } from "react-router-dom";
import { Footer, LogInPopup, Navbar } from "./components/index";
import { Cart, Home, MyOrders, Order, Verify } from "./pages";
import { useState } from "react";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <main className="min-h-screen px-[3vw] lg:max-w-screen-xl mx-auto">
      {showLogin && <LogInPopup setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
