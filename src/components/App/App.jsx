import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="bg-cork h-screen bg-cover">
      <Routes>
        <Route path="/" element={<h1>This is the Home Page</h1>} />
        <Route path="trash" element={<h1>Trash</h1>} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
