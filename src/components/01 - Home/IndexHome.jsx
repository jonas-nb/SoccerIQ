import React from "react";
import Article from "./Article";
import Logo from "./Logo";
import LoginBtn from "./LoginBtn";
import SignBtn from "./SignBtn";
import image from "../../assets/jogador1.png";
import image2 from "../../assets/jogador3.png";

const IndexHome = () => {
  return (
    <div className="border bg-[#001a2c] w-full min-h-screen md:flex md:justify-center">
      <div>
        <Logo />
        <Article />
        <div className="mt-5 md:mr-32 flex justify-center gap-8">
          <LoginBtn />
          <SignBtn />
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <img
          className="w-32 m-auto absolute bottom-0 md:hidden"
          src={image}
          alt="imagem de um jogador de futebol"
        />
        <img
          className="hidden md:block w-96 relative top-14 "
          src={image2}
          alt="imagem de um jogador de futebol"
        />
      </div>
    </div>
  );
};

export default IndexHome;
