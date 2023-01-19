import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexHome from "./components/01 - Home/IndexHome";
import IndexSignUP from "./components/03 - SignUP/IndexSignUP";
import IndexChange from "./components/04 - Change/IndexChange";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<IndexHome />} />
        <Route path="/escolha" element={<IndexChange />} />
        <Route path="/cadastro" element={<IndexSignUP />} />
      </Routes>
    </div>
  );
};

export default App;
