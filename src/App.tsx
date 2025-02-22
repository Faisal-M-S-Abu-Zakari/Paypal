import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Transfer from "./pages/Transfer";
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";
import Navbar from "./components/ui/navbar";
import Search from "./pages/Search";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Search />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
