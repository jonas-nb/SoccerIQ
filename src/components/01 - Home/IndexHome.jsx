import React from "react";
import Article from "./Article";
import Logo from "./Logo";
import image from "../../assets/jogador1.png";

const IndexHome = () => {
  return (
    <div className="border bg-[#001a2c] w-full min-h-screen ">
      <Logo />
      <Article />
    </div>
  );
};

export default IndexHome;
