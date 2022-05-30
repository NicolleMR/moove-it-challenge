import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Trash from "../../pages/Trash";
import Header from "../Header";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-cork bg-cover px-6 pt-24 pb-8">
      <Header />
      <div className="mx-auto max-w-screen-xl px-2.5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="trash" element={<Trash />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
