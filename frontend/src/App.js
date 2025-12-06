import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Optimize from "./pages/Optimize";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/optimize/:asin" element={<Optimize />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
