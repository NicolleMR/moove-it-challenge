import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>This is the Home Page</h1>} />
      <Route path="trash" element={<h1>Trash</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
