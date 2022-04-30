import React from 'react';
import MainPasta from "./pasta"
import StartPasta from "./startPasta"
import FinishPasta from "./finishPasta"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <StartPasta />
    // <Routes>
    //   <Route path="/startPasta" element={<StartPasta />} />
    //   <Route path="/pastaMain" element={<MainPasta />} />
    //   <Route path="/finishPasta" element={<FinishPasta />} />
    // </Routes>
  );
}

export default App;
