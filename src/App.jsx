import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexHome from "./components/01 - Home/IndexHome";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<IndexHome />} />
      </Routes>
    </div>
  );
};

export default App;
