import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Trash from "../../pages/Trash";

const App = () => (
  <BrowserRouter>
    <div className="bg-cork h-screen bg-cover">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trash" element={<Trash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
