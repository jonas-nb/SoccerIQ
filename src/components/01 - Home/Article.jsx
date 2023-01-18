import React from "react";
import image from "../../assets/jogador1.png";

const Article = () => {
  return (
    <div>
      <p className="z-50 w-80 m-auto mt-10 p-2 text-left text-[#c8cefe] text-[1.2rem] ">
        Teste seus conhecimentos em futebol no FutIQ, quiz interativo e
        divertido. Preparado para fazer o goal ?
      </p>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="z-40 bg-contain bg-no-repeat bg-center w-full h-48 absolute bottom-0 border-b"
      ></div>
    </div>
  );
};

export default Article;
