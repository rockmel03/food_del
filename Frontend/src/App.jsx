import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/index";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="min-h-screen px-[3vw] lg:max-w-screen-xl mx-auto">
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
