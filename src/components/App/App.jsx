import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Trash from "../../pages/Trash";

const App = () => (
  <BrowserRouter>
    <div className="bg-cork h-screen bg-cover border-16 border-solid border-yellow-700 shadow-inner p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trash" element={<Trash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
