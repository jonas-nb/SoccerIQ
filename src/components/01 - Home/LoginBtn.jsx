import React from "react";
import { useNavigate } from "react-router-dom";
const LoginBtn = () => {
  const navigate = useNavigate();

  function isLog() {
    let login = document.querySelector("#user").value;
    let senha = document.querySelector("#senha").value;
    login === "admin" && senha === "123"
      ? navigate("/escolha")
      : alert("Usuário ou login incorreto (toast)");
    console.log(login, senha);
  }

  return (
    <form>
      <label htmlFor="my-modal-4" className="btn btn-sm btn-secondary">
        Login
      </label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <div className="modal-box relative">
          <h3 className="font-bold text-lg">Insira seus dados para entrar</h3>
          <div className="py-4 flex flex-col items-center">
            <div>
              <input
                type="text"
                id="user"
                placeholder="usuário"
                className="input w-full outline focus:outline-blue-600 max-w-xs text-xl"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                id="senha"
                placeholder="senha"
                className="input w-full outline focus:outline-blue-600 max-w-xs text-xl"
              />
            </div>
          </div>
          <div className="modal-action">
            <button
              onClick={isLog}
              htmlFor="my-modal"
              className="btn bg-[#00111c]"
            >
              Entrar
            </button>
            <button
              onClick={() => navigate("/cadastro")}
              className="btn bg-[#00111c]"
            >
              Cadastra-se
            </button>
          </div>
        </div>
      </label>
    </form>
  );
};

export default LoginBtn;
