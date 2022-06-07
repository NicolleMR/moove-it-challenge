import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Trash from "../../pages/Trash";
import Header from "../Header";
import { getLocalStorageNotes, updateLocalStorageNotes } from "../../utils/localStorage";

const App = () => {
  const [notes, setNotes] = useState(getLocalStorageNotes());

  useEffect(() => {
    updateLocalStorageNotes(notes);
  }, [notes]);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col items-center justify-center bg-cork bg-cover px-6 pt-24 pb-8">
        <Header notes={notes} setNotes={setNotes} />
        <div className="mx-auto w-full max-w-screen-xl px-2.5">
          <Routes>
            <Route path="/" element={<Home notes={notes} setNotes={setNotes} />} />
            <Route path="trash" element={<Trash notes={notes} setNotes={setNotes} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
