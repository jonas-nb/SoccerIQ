import React from "react";
import Article from "./Article";
import Logo from "./Logo";
import LoginBtn from "./LoginBtn";
import SignBtn from "./SignBtn";
import image from "../../assets/jogador1.png";
import image2 from "../../assets/jogador2.png";

const IndexHome = () => {
  return (
    <div className="border bg-[#001a2c] w-full min-h-screen sm:flex sm:justify-around md:jus md:items-center md:flex-col">
      <div>
        <Logo />
        <Article />
        <div className="mt-5 sm:mr-32 md:mr-0 flex justify-center gap-8">
          <LoginBtn />
          <SignBtn />
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <img
          className="w-44 m-auto absolute bottom-0 sm:hidden"
          src={image}
          alt="imagem de um jogador de futebol"
        />
        <img
          className="hidden sm:block sm:w-56"
          src={image2}
          alt="imagem de um jogador de futebol"
        />
      </div>
    </div>
  );
};

export default IndexHome;
