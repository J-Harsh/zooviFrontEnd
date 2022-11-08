import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";

import Search from "../pages/Search";
import Shopping from "../pages/Shopping";

function App() {
  return (
    <Routes>
      <Route path="/"  element={<Navigate to="/search" />} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/shopping" element={<Shopping/>}/>
    </Routes>
  );
}

export default App;
