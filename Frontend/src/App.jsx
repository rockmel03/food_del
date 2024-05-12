import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/index";
import { Cart, Home } from "./pages";

const App = () => {
  return (
    <main className="min-h-screen px-[3vw] lg:max-w-screen-xl mx-auto">
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default App;
