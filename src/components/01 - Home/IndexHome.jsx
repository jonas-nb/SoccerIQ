import React from "react";
import Article from "./Article";
import Logo from "./Logo";
import image from "../../assets/jogador1.png";
import LoginBtn from "./LoginBtn";
import SignBtn from "./SignBtn";

const IndexHome = () => {
  return (
    <div className="border bg-[#001a2c] w-full min-h-screen ">
      <Logo />
      <Article />
      <div>
        <LoginBtn />
        <SignBtn />
      </div>
    </div>
  );
};

export default IndexHome;
